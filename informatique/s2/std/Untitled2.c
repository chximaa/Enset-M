#include <stdio.h>
#include <stdbool.h>

// Déclaration de variables pour stocker les éléments de la pile
int niveau0; // Niveau le plus bas de la pile
int niveau1;
int niveau2;
int sommet = -1; // -1 signifie que la pile est vide

// Empiler une valeur
bool Empiler(int val) {
    if (sommet == 2) { // Pile pleine
        printf("Erreur : La pile est pleine !\n");
        return false;
    }
    sommet++;
    if (sommet == 0) niveau0 = val;
    else if (sommet == 1) niveau1 = val;
    else if (sommet == 2) niveau2 = val;
    return true;
}

// Dépiler une valeur
bool Depiler(int *val) {
    if (sommet == -1) { // Pile vide
        printf("Erreur : La pile est vide !\n");
        return false;
    }
    if (sommet == 0) *val = niveau0;
    else if (sommet == 1) *val = niveau1;
    else if (sommet == 2) *val = niveau2;
    sommet--;
    return true;
}

// Afficher les éléments de la pile
void Afficher_Pile() {
    if (sommet == -1) {
        printf("La pile est vide.\n");
        return;
    }
    printf("Contenu de la pile : ");
    for (int i = 0; i <= sommet; i++) {
        if (i == 0) printf("%d ", niveau0);
        else if (i == 1) printf("%d ", niveau1);
        else if (i == 2) printf("%d ", niveau2);
    }
    printf("\n");
}

int main() {
    // Test de la pile
    Empiler(10);
    Empiler(20);
    Empiler(30);
    Afficher_Pile();

    int valeur;
    if (Depiler(&valeur)) {
        printf("Valeur dépilée : %d\n", valeur);
    }
    Afficher_Pile();

    return 0;
}
