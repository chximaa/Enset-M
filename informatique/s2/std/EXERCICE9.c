#include <stdio.h>
#include <stdlib.h>

// Définition d'une structure pour une pile
typedef struct Noeud {
    int valeur;
    struct Noeud *suivant;
} Noeud;

// Fonction pour initialiser une pile vide
Noeud* creerPile() {
    return NULL; // Une pile vide est représentée par NULL
}

// Fonction pour vérifier si une pile est vide
int estVide(Noeud *sommet) {
    return sommet == NULL;
}

// Fonction pour empiler un élément dans la pile
void empiler(Noeud **sommet, int valeur) {
    Noeud *nouveau = (Noeud*)malloc(sizeof(Noeud)); // Allocation mémoire
    if (nouveau == NULL) {
        printf("Erreur d'allocation mémoire !\n");
        exit(1);
    }
    nouveau->valeur = valeur; // Stocker la valeur
    nouveau->suivant = *sommet; // L'ancien sommet devient le suivant
    *sommet = nouveau; // Mise à jour du sommet
}

// Fonction pour dépiler un élément de la pile
int depiler(Noeud **sommet) {
    if (estVide(*sommet)) {
        printf("Erreur : La pile est vide, impossible de dépiler !\n");
        exit(1);
    }
    Noeud *temp = *sommet;
    int valeur = temp->valeur; // Récupérer la valeur
    *sommet = temp->suivant; // Mettre à jour le sommet
    free(temp); // Libérer la mémoire
    return valeur; // Retourner la valeur dépilée
}

// Fonction pour afficher une pile
void afficherPile(Noeud *sommet) {
    if (estVide(sommet)) {
        printf("La pile est vide.\n");
        return;
    }
    printf("Pile : ");
    while (sommet != NULL) {
        printf("%d ", sommet->valeur);
        sommet = sommet->suivant;
    }
    printf("\n");
}

// Fonction pour fusionner deux piles triées en une seule pile triée (ordre décroissant)
Noeud* fusionnerPiles(Noeud *pile1, Noeud *pile2) {
    Noeud *pileFusion = creerPile(); // Nouvelle pile pour stocker le résultat

    // Fusionner les éléments des deux piles en maintenant l'ordre décroissant
    while (!estVide(pile1) && !estVide(pile2)) {
        if (pile1->valeur >= pile2->valeur) {
            empiler(&pileFusion, depiler(&pile1));
        } else {
            empiler(&pileFusion, depiler(&pile2));
        }
    }

    // Ajouter les éléments restants de la pile non vide
    while (!estVide(pile1)) {
        empiler(&pileFusion, depiler(&pile1));
    }
    while (!estVide(pile2)) {
        empiler(&pileFusion, depiler(&pile2));
    }

    return pileFusion; // Retourner la pile fusionnée
}

// Fonction principale
int main() {
    Noeud *pile1 = creerPile();
    Noeud *pile2 = creerPile();

    // Empiler des valeurs (déjà triées en ordre décroissant)
    empiler(&pile1, 8);
    empiler(&pile1, 6);
    empiler(&pile1, 3);

    empiler(&pile2, 7);
    empiler(&pile2, 5);
    empiler(&pile2, 2);

    printf("Pile 1 avant fusion :\n");
    afficherPile(pile1);

    printf("\nPile 2 avant fusion :\n");
    afficherPile(pile2);

    // Fusionner les deux piles
    Noeud *pileFusionnee = fusionnerPiles(pile1, pile2);

    printf("\nPile après fusion :\n");
    afficherPile(pileFusionnee);

    return 0;
}
