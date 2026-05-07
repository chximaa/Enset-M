#include <stdio.h>     // Bibliotheque standard pour les entrees/sorties
#include <stdlib.h>    // Pour malloc() et free()

// Definition de la structure d'un neud de liste circulaire simple
typedef struct Node {
    int data;              // Donnee a stocker
    struct Node* next;     // Pointeur vers le prochain neud
} Node;

// Fonction de creation d'un nouveau neud
Node* createNode(int value) {
    Node* newNode = (Node*)malloc(sizeof(Node)); // Allocation memoire pour un nouveau neud
    newNode->data = value;                       // Initialisation de la donnee
    newNode->next = NULL;                        // Initialisation du pointeur suivant
    return newNode;                              // Retour du neud cree
}

// Insertion d'un element a la fin de la liste circulaire
void insertEnd(Node** head, int value) {
    Node* newNode = createNode(value);           // Creation du nouveau neud

    if (*head == NULL) {                         // Si la liste est vide
        *head = newNode;                         // Le nouveau neud devient la tete
        newNode->next = newNode;                 // Et il pointe sur lui-meme (cercle ferme)
        return;
    }

    Node* temp = *head;
    while (temp->next != *head) {                // Parcours jusqu'au dernier neud
        temp = temp->next;
    }

    temp->next = newNode;                        // L'ancien dernier pointe vers le nouveau
    newNode->next = *head;                       // Le nouveau pointe vers la tete pour fermer le cercle
}

// Fonction pour afficher les elements de la liste circulaire
void displayList(Node* head) {
    if (head == NULL) {
        printf("Liste vide.\n");
        return;
    }

    Node* temp = head;
    printf("Liste circulaire : ");

    do {
        printf("%d -> ", temp->data);            // Affichage de la donnee
        temp = temp->next;                       // Passage au neud suivant
    } while (temp != head);                      // Jusqu'a revenir a la tete

    printf("(retour a la tete)\n");
}

// Fonction pour supprimer un neud par valeur
void deleteValue(Node** head, int value) {
    if (*head == NULL) {
        printf("Liste vide.\n");
        return;
    }

    Node* curr = *head;
    Node* prev = NULL;

    // Cas ou la tete contient la valeur et il n'y a qu'un seul element
    if (curr->data == value && curr->next == curr) {
        free(curr);
        *head = NULL;
        printf("Valeur supprimee.\n");
        return;
    }

    // Parcours circulaire a la recherche de la valeur
    do {
        if (curr->data == value) break;
        prev = curr;
        curr = curr->next;
    } while (curr != *head);

    // Si la valeur n'a pas ete trouvee
    if (curr->data != value) {
        printf("Valeur non trouvee.\n");
        return;
    }

    if (curr == *head) {
        // Suppression de la tete dans une liste circulaire
        prev = *head;
        while (prev->next != *head) {
            prev = prev->next;                  // Trouver le dernier neud
        }
        *head = curr->next;                     // Nouvelle tete
        prev->next = *head;                     // Met a jour le dernier
    } else {
        prev->next = curr->next;                // Suppression d'un element au milieu ou a la fin
    }

    free(curr);                                 // Liberation de la memoire
    printf("Valeur supprimee.\n");
}

// Fonction pour rechercher une valeur dans la liste circulaire
void searchValue(Node* head, int value) {
    if (head == NULL) {
        printf("Liste vide.\n");
        return;
    }

    Node* temp = head;
    int position = 1;

    do {
        if (temp->data == value) {
            printf("Valeur %d trouvae a la position %d.\n", value, position);
            return;
        }
        temp = temp->next;
        position++;
    } while (temp != head);

    printf("Valeur %d non trouvee.\n", value);
}

// Fonction principale avec menu interactif
int main() {
    Node* head = NULL;                          // Liste vide au depart
    int choix, val;

    do {
        // Affichage du menu utilisateur
        printf("\n=== MENU ===\n");
        printf("1. Inserer un element\n");
        printf("2. Supprimer un element\n");
        printf("3. Rechercher un element\n");
        printf("4. Afficher la liste\n");
        printf("0. Quitter\n");
        printf("Votre choix : ");
        scanf("%d", &choix);                    // Lecture du choix

        switch (choix) {
            case 1:
                printf("Entrez la valeur a inserer : ");
                scanf("%d", &val);
                insertEnd(&head, val);          // Insertion
                break;
            case 2:
                printf("Entrez la valeur a supprimer : ");
                scanf("%d", &val);
                deleteValue(&head, val);        // Suppression
                break;
            case 3:
                printf("Entrez la valeur a rechercher : ");
                scanf("%d", &val);
                searchValue(head, val);         // Recherche
                break;
            case 4:
                displayList(head);              // Affichage
                break;
            case 0:
                printf("Fin du programme.\n");  // Sortie
                break;
            default:
                printf("Choix invalide. Reessayez.\n");
        }
    } while (choix != 0);                       // Repeter jusqu'a ce que l'utilisateur quitte

    return 0;                                   // Fin normale du programme
}

