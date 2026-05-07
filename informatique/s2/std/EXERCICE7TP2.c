#include <stdio.h>
#include <stdlib.h>

// Définition d'un élément de la pile
typedef struct Noeud { // Un noeud est une unité de données de la pile.
    int valeur;
    struct Noeud *suivant; // Un pointeur qui pointe vers le noeud suivant dans la pile. //Cela donne l'impression d'une structure imbriquée, mais c'est en réalité une définition récursive.
} Noeud;

// Fonction pour initialiser une pile vide
Noeud* creerPile() {
    return NULL;
}

// Fonction pour vérifier si la pile est vide
int estVide(Noeud *sommet) {
    return sommet == NULL; // sommet ici est le premier noeud
}

// Fonction pour empiler un élément dans la pile
void empiler(Noeud **sommet, int valeur) {
    Noeud *nouveau = (Noeud*)malloc(sizeof(Noeud)); // Allocation dynamique
    if (nouveau == NULL) {
        printf("Erreur d'allocation mémoire !\n");
        exit(1);
    }
    nouveau->valeur = valeur; // Stocker la valeur
    nouveau->suivant = *sommet; // Mettre à jour le sommet
    *sommet = nouveau; // Le nouveau noeud devient le sommet de la pile.
}

// Fonction pour dépiler un élément de la pile
int depiler(Noeud **sommet) {
    if (estVide(*sommet)) {
        printf("Erreur : La pile est vide !\n");
        exit(1); // terminer immédiatement le programme avec erreur
    }
    Noeud *temp = *sommet;
    int valeur = temp->valeur;
    *sommet = temp->suivant; // Mise à jour du sommet
    free(temp); // Libération de la mémoire
    return valeur;
}

// Fonction pour afficher la pile
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

// Fonction pour vérifier si une valeur existe déja dans une pile
int valeurExiste(Noeud *pile, int valeur) {
    while (pile != NULL) {
        if (pile->valeur == valeur) { // Si la valeur existe déjà dans la pile, retourne 1
            return 1; // La valeur existe déja
        }
        pile = pile->suivant;
    }
    return 0; // La valeur n'existe pas encore
}

// Fonction pour supprimer les doublons dans une pile dynamique
void supprimerDoublons(Noeud **pilePrincipale) {
    Noeud *pileTemporaire = creerPile(); // Pile temporaire pour stocker les valeurs uniques

    while (!estVide(*pilePrincipale)) {
        int valeurCourante = depiler(pilePrincipale); // Dépiler un élément

        // Vérifier si la valeur existe déja dans la pile temporaire
        if (!valeurExiste(pileTemporaire, valeurCourante)) {
            empiler(&pileTemporaire, valeurCourante); // Si l'élément est déjà présent dans la pile temporaire (doublon), il est ignoré.  Sinon, il est empilé dans la pile temporaire.
        }
    }

    // Remettre les éléments uniques dans la pile principale
    while (!estVide(pileTemporaire)) {
        empiler(pilePrincipale, depiler(&pileTemporaire));
    }
}

// Fonction principale
int main() {
    Noeud *maPile = creerPile();

    // Empiler des valeurs avec doublons
    empiler(&maPile, 5);
    empiler(&maPile, 10);
    empiler(&maPile, 15);
    empiler(&maPile, 10);
    empiler(&maPile, 20);
    empiler(&maPile, 5);
    empiler(&maPile, 25);

    printf("Pile avant suppression des doublons :\n");
    afficherPile(maPile);

    // Suppression des doublons
    supprimerDoublons(&maPile);

    printf("\nPile après suppression des doublons :\n");
    afficherPile(maPile);

    return 0;
}
