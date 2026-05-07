#include <stdio.h>
#include <stdlib.h>

// Définition d'un noeud pour la liste chaînée
typedef struct Noeud {
    int valeur;
    struct Noeud* suivant;
} Noeud;

// Définition de la pile
typedef struct {
    Noeud* sommet; // Pointeur vers le sommet de la pile
} Pile;

##################################################Liste Chainee###################################################################

#include <stdio.h>
#include <stdlib.h>

// Définition de la structure pour représenter un élément de la pile
typedef struct Element {
    int valeur;
    struct Element* suivant; // Pointeur pour la continuité en pile
} Element;

#####################utilisant des variables dynamiques pour stocker les éléments de la pile#####################################
