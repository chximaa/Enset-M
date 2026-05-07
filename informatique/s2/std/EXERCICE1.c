#include <stdio.h>    // Bibliotheque standard pour les entrees/sorties
#include <stdlib.h>   // Bibliotheque standard pour la gestion dynamique de la memoire

// Definition de la structure d un neud de la liste chainee
typedef struct Node {
    int data;              // Champ de donnees pour stocker une valeur entiere
    struct Node* next;     // Pointeur vers le neud suivant
} Node;

// Fonction pour creer un nouveau neud
Node* createNode(int value) {
    Node* newNode = (Node*)malloc(sizeof(Node)); // Allocation dynamique deun nouveau neud
    newNode->data = value;                       // Affectation de la donnee
    newNode->next = NULL;                        // Initialisation du pointeur a NULL
    return newNode;                              // Retour du pointeur vers le neud
}

// Fonction pour inserer un element a la fin de la liste
void insertEnd(Node** head, int value) {
    Node* newNode = createNode(value);           // Creation du nouveau neud
    if (*head == NULL) {                         // Si la liste est vide
        *head = newNode;                         // Le nouveau neud devient la tete (le debut)
        return;
    }
    Node* temp = *head;                          // Si la liste n'est pas vide, Pointeur temporaire pour parcourir la liste
    while (temp->next != NULL) {
        temp = temp->next;                       // Aller jusqu'au dernier neud
    }
    temp->next = newNode;                        // Ajouter le nouveau neud a la fin
}

// Fonction pour afficher les elements de la liste
void displayList(Node* head) {
    if (head == NULL) {                          // Si la liste est vide
        printf("La liste est vide.\n");
        return;
    }
    Node* temp = head;
    printf("Liste : ");
    while (temp != NULL) {
        printf("%d -> ", temp->data);            // Affiche la valeur du neud
        temp = temp->next;                       // Avance au neud suivant
    }
    printf("NULL\n");                            // Fin de l'affichage
}

// Fonction pour supprimer un element de la liste
void deleteValue(Node** head, int value) {
    Node* temp = *head;                          // Pointeur de parcours
    Node* prev = NULL;                           // Pointeur vers le neud precedent

    while (temp != NULL && temp->data != value) {
        prev = temp;
        temp = temp->next;                       // Recherche de la valeur a supprimer
    }

    if (temp == NULL) {
        printf("Valeur non trouvee.\n");         // L'element n'est pas dans la liste
        return;
    }

    if (prev == NULL) {
        *head = temp->next;                      // Suppression de la tete
    } else {
        prev->next = temp->next;                 // Suppression d'un neud au milieu ou a la fin
    }

    free(temp);                                  // Liberation de la memoire du neud supprime
    printf("Valeur supprimee.\n");
}

// Fonction pour rechercher un element dans la liste
void searchValue(Node* head, int value) {
    Node* temp = head;
    int position = 1;                            // Compteur de position

    while (temp != NULL) {
        if (temp->data == value) {
            printf("Valeur %d trouvee a la position %d.\n", value, position);
            return;
        }
        temp = temp->next;
        position++;
    }

    printf("Valeur %d non trouvee.\n", value);
}

// Fonction principale avec menu interactif
int main() {
    Node* head = NULL;                           // Initialisation de la tete a NULL
    int choix, val;                              // Variables pour les options et saisies

    do {
        // Menu utilisateur
        printf("\n=== MENU ===\n");
        printf("1. Inserer un element\n");
        printf("2. Supprimer un element\n");
        printf("3. Rechercher un element\n");
        printf("4. Afficher la liste\n");
        printf("0. Quitter\n");
        printf("Votre choix : ");
        scanf("%d", &choix);                     // Lecture du choix utilisateur

        switch (choix) {
            case 1:
                printf("Entrez la valeur a inserer : ");
                scanf("%d", &val);
                insertEnd(&head, val);           // Appel de la fonction d'insertion
                break;
            case 2:
                printf("Entrez la valeur a supprimer : ");
                scanf("%d", &val);
                deleteValue(&head, val);         // Appel de la fonction de suppression
                break;
            case 3:
                printf("Entrez la valeur a rechercher : ");
                scanf("%d", &val);
                searchValue(head, val);          // Appel de la fonction de recherche
                break;
            case 4:
                displayList(head);               // Affichage de la liste
                break;
            case 0:
                printf("Fin du programme.\n");   // Sortie du menu
                break;
            default:
                printf("Choix invalide. Reessayez.\n");  // Gestion des erreurs
        }
    } while (choix != 0);                        // Boucle tant que l'utilisateur ne choisit pas 0

    return 0;                                    // Fin du programme
}

