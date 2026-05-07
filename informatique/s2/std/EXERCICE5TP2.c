#include <stdio.h>
#include <stdlib.h>

// Définition d'une structure pour une pile // une seule pile de manière dynamique.
typedef struct Pile {
    int valeur;
    struct Pile *suivant; // qui pointe vers l'élément suivant dans la pile. // ne liaison vers l'élément suivant dans la pile, un peu comme les maillons d'une chaîne.
} Pile;

// Fonction pour créer une pile vide (initialisation)
Pile* creerPile() {
    return NULL; // Une pile vide est représentée par NULL
}

// Fonction pour vérifier si une pile est vide
int estVide(Pile *sommet) {
    return sommet == NULL;
}

// Fonction pour empiler un élément dans la pile
void empiler(Pile **sommet, int valeur) {
    Pile *nouveau = (Pile*)malloc(sizeof(Pile)); // Allocation mémoire
    if (nouveau == NULL) {
        printf("Erreur d'allocation mémoire !\n");
        exit(1);
    }
    nouveau->valeur = valeur; // Stockage de la valeur
    nouveau->suivant = *sommet; // L'ancien sommet devient le suivant
    *sommet = nouveau; // Mise à jour du sommet
}

// Fonction pour dépiler un élément de la pile
int depiler(Pile **sommet) {
    if (estVide(*sommet)) {
        printf("Erreur : tentative de dépiler une pile vide !\n");
        exit(1);
    }
    Pile *temp = *sommet; // Sauvegarde du sommet // st un pointeur temporaire utilisé pour sauvegarder l'adresse de l'actuel sommet de la pile.
    int valeur = temp->valeur; // Récupération de la valeur
    *sommet = temp->suivant; // Mise à jour du sommet
    free(temp); // Libération de la mémoire
    return valeur; // Retourne la valeur dépilée
}

// Fonction pour afficher la pile
void afficherPile(Pile *sommet) {
    Pile *temp = sommet;
    printf("Pile : ");
    while (temp != NULL) {
        printf("%d ", temp->valeur);
        temp = temp->suivant;
    }
    printf("\n");
}

// Fonction pour trier une pile en utilisant une pile auxiliaire
void trierPile(Pile **pilePrincipale) {
    Pile *pileTemporaire = creerPile(); // Pile auxiliaire

    while (!estVide(*pilePrincipale)) {
        // Dépiler un élément de la pile principale
        int valeurCourante = depiler(pilePrincipale);

        // Placer correctement cet élément dans la pile temporaire
        while (!estVide(pileTemporaire) && pileTemporaire->valeur > valeurCourante) {
            // Remettre les éléments plus grands dans la pile principale
            empiler(pilePrincipale, depiler(&pileTemporaire));
        }

        // Placer l'élément courant dans la pile temporaire
        empiler(&pileTemporaire, valeurCourante);
    }

    // Remettre les éléments dans la pile principale (dans l'ordre croissant)
    while (!estVide(pileTemporaire)) {
        empiler(pilePrincipale, depiler(&pileTemporaire));
    }
}

// Fonction principale
int main() {
    Pile *maPile = creerPile();

    // Empiler quelques valeurs (ordre initial aléatoire)
    empiler(&maPile, 3);
    empiler(&maPile, 5);
    empiler(&maPile, 1);
    empiler(&maPile, 4);
    empiler(&maPile, 2);

    printf("Pile avant tri :\n");
    afficherPile(maPile);

    // Tri de la pile
    trierPile(&maPile);

    printf("\nPile après tri :\n");
    afficherPile(maPile);

    return 0;
}
