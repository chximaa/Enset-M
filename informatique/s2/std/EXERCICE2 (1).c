#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Définition de la structure Produit
typedef struct Produit {
    int id;
    char nom[30];
    int quantite;
    float prix;
    struct Produit* suivant;
} Produit;

/********************************************
 *  1. Fonction pour afficher l’inventaire
 ********************************************/
void afficherInventaire(Produit* tete) {
    Produit* temp = tete;
    printf("\n INVENTAIRE \n");
    while (temp != NULL) {
        printf("ID: %d | Nom: %s | Quantité: %d | Prix: %.2f$\n", temp->id, temp->nom, temp->quantite, temp->prix);
        temp = temp->suivant;
    }
    printf("----------------------\n");
}

/***************************************************
 *  2. Fonction pour rechercher un produit par ID
 ***************************************************/
Produit* rechercherProduit(Produit* tete, int id) {
    Produit* temp = tete;
    while (temp != NULL) {
        if (temp->id == id) {
            return temp; // Retourne l'adresse du produit trouvé
        }
        temp = temp->suivant;
    }
    return NULL; // Produit introuvable
}

/*******************************************************
 *  3. Fonction pour modifier la quantité d'un produit
 *******************************************************/
void modifierQuantite(Produit* tete, int id, int nouvelleQuantite) {
    Produit* produit = rechercherProduit(tete, id);
    if (produit != NULL) {
        produit->quantite = nouvelleQuantite;
        printf("\n Quantité du produit '%s' mise à jour : %d\n", produit->nom, produit->quantite); // nouvelle
    } else {
        printf("\n Produit introuvable !\n");
    }
}

/****************************************************
 *  4. Fonction pour ajouter un nouveau produit
 ****************************************************/
void ajouterProduit(Produit** tete, int id, char* nom, int quantite, float prix) {
    Produit* nouveau = (Produit*)malloc(sizeof(Produit));
    nouveau->id = id;
    strcpy(nouveau->nom, nom);
    nouveau->quantite = quantite;
    nouveau->prix = prix;
    nouveau->suivant = *tete; // Ajout en tête de liste
    *tete = nouveau;
}

/**************************************************
 *  5. Fonction pour supprimer un produit par ID
 **************************************************/
void supprimerProduit(Produit** tete, int id) {
    Produit* temp = *tete;
    Produit* prev = NULL; //  qui servira à retenir l’élément précédent, afin de relier la liste après suppression

    while (temp != NULL && temp->id != id) {
        prev = temp; // On garde une référence au produit précédent (prev = temp;), qui sera utile pour réajuster les liens.
        temp = temp->suivant;
    }

    if (temp == NULL) {
        printf("\n Produit non trouvé !\n");
        return;
    }

    if (prev == NULL) { // Cas où l'élément supprimé est le premier
        *tete = temp->suivant;
    } else { // // Cas où l'élément supprimé est au milieu ou à la fin
        prev->suivant = temp->suivant;
    }

    free(temp);
    printf("\n Produit supprimé avec succès.\n");
}

/*******************************************************
 *  6. Fonction pour calculer la valeur totale de l'inventaire
 *******************************************************/
float valeurTotaleInventaire(Produit* tete) {
    float total = 0;
    Produit* temp = tete;
    while (temp != NULL) {
        total += temp->quantite * temp->prix;
        temp = temp->suivant;
    }
    return total;
}

/****************************************************
 *  7. Fonction pour trouver le produit min/max prix
 ****************************************************/
void trouverMinMaxPrix(Produit* tete) {
    if (tete == NULL) {
        printf("\n Inventaire vide !\n");
        return;
    }

    Produit* temp = tete;
    Produit* minProduit = tete;
    Produit* maxProduit = tete;

    while (temp != NULL) {
        if (temp->prix < minProduit->prix) minProduit = temp;
        if (temp->prix > maxProduit->prix) maxProduit = temp;
        temp = temp->suivant;
    }

    printf("\n Produit le moins cher : %s (%.2f$)\n", minProduit->nom, minProduit->prix);
    printf(" Produit le plus cher : %s (%.2f$)\n", maxProduit->nom, maxProduit->prix);
}

/************************************
 *  8. Programme principal (main)
 ***************************/
int main() {
    Produit* inventaire = NULL; //  Déclaration de la tête de la liste (vide au début)

    // Ajout de quelques produits à la liste
    ajouterProduit(&inventaire, 101, "Ordinateur", 5, 999.99);
    ajouterProduit(&inventaire, 102, "Smartphone", 10, 699.99);
    ajouterProduit(&inventaire, 103, "Casque Audio", 15, 149.99);

    // Affichage de l'inventaire
    afficherInventaire(inventaire);

    // Modification de la quantité d'un produit
    modifierQuantite(inventaire, 102, 12);

    // Suppression d'un produit
    supprimerProduit(&inventaire, 103);

    // Affichage après suppression
    afficherInventaire(inventaire);

    // Calcul de la valeur totale de l’inventaire
    printf("\n Valeur totale de l'inventaire : %.2f$\n", valeurTotaleInventaire(inventaire));

    // Trouver le produit le moins cher et le plus cher
    trouverMinMaxPrix(inventaire);

    return 0;
}
