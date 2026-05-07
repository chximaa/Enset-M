#include <stdio.h>
#include <stdlib.h>

// Définition de la structure
typedef struct Node {
    int data;
    struct Node* prev;
    struct Node* next;
} Node;

// Insertion en tête
void insertAtHead(Node** head, int value) {
    Node* newNode = (Node*) malloc(sizeof(Node));
    newNode->data = value;
    newNode->prev = NULL;
    newNode->next = *head; // On fait pointer next vers l'ancien premier nœud (l’actuelle tête).
    if (*head != NULL) // si il n'est pas vide
        (*head)->prev = newNode; //  On fait pointer le champ prev de l’ancien premier nœud vers le nouveau nœud.
    *head = newNode;
}

// Insertion en fin
void insertAtTail(Node** head, int value) {
    Node* newNode = (Node*) malloc(sizeof(Node));
    newNode->data = value;
    newNode->next = NULL;

    if (*head == NULL) {
        newNode->prev = NULL;
        *head = newNode;
        return;
    }

    Node* temp = *head;
    while (temp->next != NULL)
        temp = temp->next;

    temp->next = newNode;
    newNode->prev = temp;
}

// Affichage dans le sens direct
void displayForward(Node* head) {
    printf("Liste avant: "); // Affiche un message d’introduction pour montrer qu’on commence l’affichage dans le sens avant (de gauche à droite).
    while (head != NULL) { //  Tant que le pointeur head n’est pas NULL, on est dans la liste
        printf("%d ", head->data); //  affiche la valeur du nœud courant.
        if (head->next == NULL) //  on s’arrête si on est au dernier nœud (celui dont next est NULL)
            break;
        head = head->next; // avance au nœud suivant dans la liste
    }
    printf("\n");

    // On peut appeler displayBackward à partir d'ici si on veut
    printf("Liste arrière: ");
    while (head != NULL) {
        printf("%d ", head->data);
        head = head->prev;
    } // head == NULL : condition d’arrêt (on atteint le tout premier nœud, qui a prev == NULL).
    printf("\n");
}

// Suppression d’un élément par valeur
void deleteByValue(Node** head, int value) {
    Node* temp = *head;

    while (temp != NULL && temp->data != value)
        temp = temp->next;

    if (temp == NULL) {
        printf("Élément %d non trouvé.\n", value);
        return;
    }

    if (temp->prev != NULL) // Cas 1 : le nœud n’est pas en tête
        temp->prev->next = temp->next; // Si le nœud à supprimer a un précédent, alors ce précédent doit pointer vers le suivant de temp
    else
        *head = temp->next; // Cas 2 : le nœud est en tête
         // Dans ce cas, on met à jour la tête pour qu’elle pointe vers le nœud suivant
    if (temp->next != NULL) // Cas 3 : le nœud a un suivant
        temp->next->prev = temp->prev; //  Si le nœud supprimé n’est pas le dernier, alors son suivant doit pointer en arrière vers le précédent.

    free(temp);
    printf("Élément %d supprimé.\n", value);
}

// Exemple d'utilisation
int main() {
    Node* head = NULL;

    insertAtHead(&head, 10);
    insertAtHead(&head, 20);
    insertAtTail(&head, 30);
    insertAtTail(&head, 40);

    displayForward(head);

    deleteByValue(&head, 30);
    displayForward(head);

    deleteByValue(&head, 100); // test suppression d'une valeur inexistante

    return 0;
}

