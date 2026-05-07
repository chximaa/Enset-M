#include <stdio.h>
#include <stdlib.h>

// Définition de la structure pour un élément de la pile
typedef struct Noeud {
    int valeur;
    struct Noeud *suivant; // Pointeur vers l'element suivant
} Noeud;

// Fonction pour initialiser une pile vide
Noeud* Init_PileD() {
    return NULL; // Une pile vide est représentée par NULL
}

// Fonction pour vérifier si la pile est vide
int PileD_Vide(Noeud *sommet) { // permet de déréférencer le pointeur sommet, c'est-à-dire qu'on accède au contenu réel de ce que sommet
    return sommet == NULL; // compare simplement le pointeur lui-même   // sommet->valeur accéderait au champ valeur de la structure pointée par sommet.
}

// Fonction pour empiler un element dans la pile
void EmpilerD(Noeud **sommet, int valeur) {
    Noeud *nouveau = (Noeud*)malloc(sizeof(Noeud)); // Allocation memoire pour un nouvel element
    if (nouveau == NULL) {
        printf("Erreur d'allocation mémoire !\n");
        exit(1);
    }
    nouveau->valeur = valeur; // Stocke la valeur
    nouveau->suivant = *sommet; // L'ancien sommet devient l'élément suivant
    *sommet = nouveau; // Mise à jour du sommet de la pile
}

// Fonction pour depiler un élément de la pile
int DepilerD(Noeud **sommet) {
    if (PileD_Vide(*sommet)) {
        printf("Erreur : La pile est vide, impossible de dépiler !\n");
        exit(1);
    }
    Noeud *temp = *sommet; // Stocker l'ancien sommet // On sauvegarde cette adresse dans le pointeur temp pour pouvoir accéder à l'élément qui sera supprimé.
    int valeur = temp->valeur; // Recuperer la valeur
    *sommet = temp->suivant; // Deplacer le sommet au suivant //est modifié pour qu'il pointe maintenant vers le nœud suivant dans la pile (temp->suivant).
    free(temp); // Liberer la memoire de l'ancien sommet // Cela enlève l'ancien sommet de la pile
    return valeur; // Retourner la valeur depilee
}

// Fonction pour obtenir la valeur du sommet sans depiler
int ValeurD(Noeud *sommet) {
    if (PileD_Vide(sommet)) {
        printf("Erreur : La pile est vide !\n");
        exit(1);
    }
    return sommet->valeur; // Retourner la valeur du sommet
}

// Fonction pour afficher la pile
void Afficher_PileD(Noeud *sommet) {
    if (PileD_Vide(sommet)) {
        printf("La pile est vide.\n");
        return;
    }
    printf("élements de la pile : ");
    while (sommet != NULL) {
        printf("%d ", sommet->valeur);
        sommet = sommet->suivant; // sommet--
    }
    printf("\n");
}

// Programme principal pour tester les fonctions
int main() {
    Noeud *maPile = Init_PileD(); // Initialisation de la pile

    // Empilement de valeurs
    EmpilerD(&maPile, 10);
    EmpilerD(&maPile, 20);
    EmpilerD(&maPile, 30);
    EmpilerD(&maPile, 40);

    printf("Pile aprés empilement :\n");
    Afficher_PileD(maPile);

    // Obtenir la valeur du sommet
    printf("Valeur au sommet : %d\n", ValeurD(maPile));

    // Depiler une valeur
    printf("Valeur dépilée : %d\n", DepilerD(&maPile));

    printf("Pile aprés dépilage :\n");
    Afficher_PileD(maPile);

    return 0;
}
