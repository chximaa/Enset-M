#include <stdio.h>
#include <stdlib.h>

#define MAX 32 // Taille maximale de la pile (pour stocker jusqu'à 32 bits)

// Définition de la structure de la pile
typedef struct {
    int elements[MAX]; // Tableau pour stocker les bits du binaire
    int sommet;        // Indice du sommet de la pile
} Pile;

// Initialiser la pile
void Init_Pile(Pile *P) {
    P->sommet = -1; // La pile est vide au départ
}

// Vérifier si la pile est vide
int Pile_Vide(Pile P) {
    return (P.sommet == -1);
}

// Vérifier si la pile est pleine
int Pile_Pleine(Pile P) {
    return (P.sommet == MAX - 1);
}

// Empiler un élément (ajouter un bit dans la pile)
void Empiler(Pile *P, int bit) {
    if (Pile_Pleine(*P)) {
        printf("Erreur : Pile pleine !\n");
    } else {
        P->sommet++;
        P->elements[P->sommet] = bit;
    }
}

// Dépiler un élément (retirer un bit du sommet)
int Depiler(Pile *P) {
    if (Pile_Vide(*P)) {
        printf("Erreur : Pile vide !\n");
        return -1; // Valeur spéciale pour erreur
    }
    return P->elements[P->sommet--];
}

// Fonction pour convertir un nombre décimal en binaire
void Convertir_Decimal_Binaire(int nombre) {
    Pile P;
    Init_Pile(&P);

    // Cas particulier pour le nombre 0
    if (nombre == 0) {
        printf("Binaire : 0\n");
        return;
    }

    // Conversion en binaire : division par 2 et empilement des restes
    while (nombre > 0) {
        Empiler(&P, nombre % 2); // Stocke le reste dans la pile
        nombre /= 2; // Division par 2
    }

    // Affichage du nombre binaire en dépilant les valeurs
    printf("Binaire : ");
    while (!Pile_Vide(P)) {
        printf("%d", Depiler(&P)); // Lire du haut vers le bas
    }
    printf("\n");
}

// Programme principal pour tester la conversion
int main() {
    int nombre;
    printf("Entrez un nombre décimal : ");
    scanf("%d", &nombre);

    Convertir_Decimal_Binaire(nombre);

    return 0;
}
