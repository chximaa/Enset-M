#include <stdio.h>    // Bibliotheque standard pour les fonctions d'entree/sortie
#include <stdlib.h>   // Bibliotheque pour l'allocation dynamique de memoire

// Declaration de la structure d'un neud
typedef struct Node {
    int data;             // Valeur stockee dans le neud
    struct Node* next;    // Pointeur vers le neud suivant
} Node;

// Fonction pour creer un nouveau neud
Node* createNode(int value) {
    Node* newNode = (Node*)malloc(sizeof(Node)); // Allocation memoire pour le neud
    newNode->data = value;                       // Affectation de la valeur
    newNode->next = NULL;                        // Initialisation du pointeur a NULL
    return newNode;                              // Retour du neud cree
}

// Fonction pour inserer un neud de maniere triee (ordre croissant)
void insertSorted(Node** head, int value) {
    Node* newNode = createNode(value);           // Creation du nouveau neud
    if (*head == NULL || (*head)->data >= value) {
        // Insertion en tete si la liste est vide ou si la valeur inseree est plus petite que la valeur dans le head
        newNode->next = *head;
        *head = newNode;
        return;
    }

    Node* temp = *head; //  On crée un pointeur temporaire temp pour parcourir la liste sans toucher directement à head.
    while (temp->next != NULL && temp->next->data < value) { // Et que la valeur du nœud suivant est inférieure à la valeur à insérer.
        temp = temp->next;                       // Avancer jusqu'a la bonne position
    }

    newNode->next = temp->next;                  // Insertion entre deux neuds
    temp->next = newNode; //  Insertion du nouveau nœud entre temp et temp->next.
}

// Fonction pour afficher la liste chainee
void displayList(Node* head) {
    if (head == NULL) {
        printf("La liste est vide.\n");
        return;
    }

    printf("Liste : ");
    Node* temp = head;
    while (temp != NULL) {
        printf("%d -> ", temp->data);            // Affichage des valeurs
        temp = temp->next;
    }
    printf("NULL\n");                            // Fin d'affichage
}

// Fonction pour supprimer un element de la liste par sa valeur
void deleteValue(Node** head, int value) {
    Node* temp = *head;
    Node* prev = NULL;

    // Parcours de la liste a la recherche de la valeur
    while (temp != NULL && temp->data != value) {
        prev = temp;
        temp = temp->next;
    }

    if (temp == NULL) {
        printf("Valeur non trouvee.\n");         // Valeur absente
        return;
    }

    if (prev == NULL) {
        *head = temp->next;                      // Suppression en tete
    } else {
        prev->next = temp->next;                 // Suppression en milieu ou fin
    }

    free(temp);                                  // Liberation memoire
    printf("Valeur supprimee.\n");
}

// Fonction pour rechercher un element dans la liste
void searchValue(Node* head, int value) {
    Node* temp = head;
    int position = 1;

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
    Node* head = NULL;                           // Initialisation de la liste vide
    int choix, val;

    do {
        // Menu
        printf("\n=== MENU ===\n");
        printf("1. Inserer un element (tri croissant)\n");
        printf("2. Supprimer un element\n");
        printf("3. Rechercher un element\n");
        printf("4. Afficher la liste\n");
        printf("0. Quitter\n");
        printf("Votre choix : ");
        scanf("%d", &choix);

        switch (choix) {
            case 1:
                printf("Entrez la valeur a inserer : ");
                scanf("%d", &val);
                insertSorted(&head, val);        // Insertion triee
                break;
            case 2:
                printf("Entrez la valeur a supprimer : ");
                scanf("%d", &val);
                deleteValue(&head, val);         // Suppression
                break;
            case 3:
                printf("Entrez la valeur a rechercher : ");
                scanf("%d", &val);
                searchValue(head, val);          // Recherche
                break;
            case 4:
                displayList(head);               // Affichage
                break;
            case 0:
                printf("Fin du programme.\n");   // Fin
                break;
            default:
                printf("Choix invalide. Reessayez.\n"); // Erreur de saisie
        }

    } while (choix != 0);                        // Boucle tant que l'utilisateur ne choisit pas de quitter

    return 0;                                    // Fin du programme
}

