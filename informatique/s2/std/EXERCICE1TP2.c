#include <stdio.h>
#include <stdlib.h>

#define MAX 5 // Définition de la taille maximale de la pile

// Définition de la structure de la pile
typedef struct {
    int elements[MAX]; // Tableau pour stocker les éléments
    int sommet;        // Indice du sommet de la pile
} Pile;

// Fonction d'initialisation de la pile
void Init_Pile(Pile *P) {  // modifications apportées à cette copie n'affectent pas la structure originale,
    P->sommet = -1; // La pile est vide au départ
}

// Fonction pour vérifier si la pile est vide
int Pile_Vide(Pile P) {  // instance de la pile
    return (P.sommet == -1); // Si sommet = -1, alors la pile est vide
}

// Fonction pour vérifier si la pile est pleine
int Pile_Pleine(Pile P) {
    return (P.sommet == MAX - 1); // Si sommet = MAX-1, la pile est pleine
}

// Fonction pour empiler un élément
void Empiler(Pile *P, int val) {
    if (Pile_Pleine(*P)) {
        printf("Erreur : La pile est pleine !\n");
    } else {
        P->sommet++;
        P->elements[P->sommet] = val;
    }
}

// Fonction pour dépiler un élément
void Depiler(Pile *P) {
    if (Pile_Vide(*P)) {
        printf("Erreur : Pile vide !\n");
    } else {
        P->sommet--; // On décrémente l'indice du sommet
    }
}

// Fonction pour obtenir la valeur au sommet
int Valeur_Sommet(Pile P) {
    if (Pile_Vide(P)) {
        printf("Erreur : Pile vide !\n");
        return -1; // Valeur spéciale pour indiquer une erreur
    }
    return P.elements[P.sommet]; // Retourne l'élément au sommet
}

// Fonction pour afficher le contenu de la pile
void Afficher_Pile(Pile P) {
    if (Pile_Vide(P)) {
        printf("Pile vide.\n");
        return;
    }
    printf("Contenu de la pile : ");
    for (int i = P.sommet; i >= 0; i--) { // On affiche du sommet vers la base
        printf("%d ", P.elements[i]);
    }
    printf("\n");
}

// Programme principal pour tester la pile
int main() {
    Pile maPile;
    Init_Pile(&maPile);

    Empiler(&maPile, 10);
    Empiler(&maPile, 20);
    Empiler(&maPile, 30);
    Afficher_Pile(maPile);

    printf("Valeur au sommet : %d\n", Valeur_Sommet(maPile));

    Depiler(&maPile);
    Afficher_Pile(maPile);

    return 0;
}
