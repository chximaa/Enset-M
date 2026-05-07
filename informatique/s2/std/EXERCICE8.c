#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// D�finition d'un element de la pile
typedef struct Noeud {
    char caractere;
    struct Noeud *suivant;
} Noeud;

// Fonction pour initialiser une pile vide
Noeud* creerPile() {
    return NULL; // Une pile vide est representee par NULL
}

// Fonction pour vérifier si la pile est vide
int estVide(Noeud *sommet) {
    return sommet == NULL;
}

// Fonction pour empiler un caract�re dans la pile
void empiler(Noeud **sommet, char caractere) {
    Noeud *nouveau = (Noeud*)malloc(sizeof(Noeud)); // Allocation dynamique
    if (nouveau == NULL) {
        printf("Erreur d'allocation m�moire !\n");
        exit(1);
    }
    nouveau->caractere = caractere; // Stocker le caractére
    nouveau->suivant = *sommet; // L'ancien sommet devient l'élément suivant
    *sommet = nouveau; // Mise � jour du sommet de la pile
}

// Fonction pour dépiler un caractére de la pile
char depiler(Noeud **sommet) {
    if (estVide(*sommet)) {
        printf("Erreur : La pile est vide !\n");
        exit(1);
    }
    Noeud *temp = *sommet;
    char caractere = temp->caractere; // Récupérer le caract�re
    *sommet = temp->suivant; // Mettre à jour le sommet
    free(temp); // Libérer la mémoire
    return caractere; // Retourner le caractére dépile
}

// Fonction pour vérifier si un mot est un palindrome
int estPalindrome(char mot[]) {
    int longueur = strlen(mot); // Longueur du mot
    Noeud *maPile = creerPile(); // Initialisation de la pile

    // étape 1 : Empiler tous les caractéres du mot
    for (int i = 0; i < longueur; i++) {
        empiler(&maPile, mot[i]);
    }

    // étape 2 : Comparer les caractéres dépiles avec ceux du mot original
    for (int i = 0; i < longueur; i++) {
        if (mot[i] != depiler(&maPile)) {
            return 0; // Si un caractére ne correspond pas, ce n'est pas un palindrome
        }
    }

    return 1; // Si tous les caractéres correspondent, c'est un palindrome
}

// Programme principal
int main() {
    char mot[100]; // Tableau pour stocker le mot

    // Saisie du mot
    printf("Entrez un mot : ");
    scanf("%s", mot);

    // Vérification du palindrome
    if (estPalindrome(mot)) {
        printf("'%s' est un palindrome.\n", mot);
    } else {
        printf("'%s' n'est pas un palindrome.\n", mot);
    }

    return 0;
}
