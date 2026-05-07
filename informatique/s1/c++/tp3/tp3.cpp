/// EXERCICE 1

#include <iostream>
using namespace std;

class Produit {
private:
    int refe;
    double puht;
    int quantite;

public:
    void initialise(int r, double p, int q) {
        refe = r;
        puht = p;
        quantite = q;
    }

    void affiche() {
        cout << "Référence: " << refe << ", Prix HT: " << puht
             << ", Quantité: " << quantite << endl;
    }

    double prixttc() {
        return puht * 1.2;
    }

    double prix_total() {
        return prixttc() * quantite;
    }

    void retirer(int q) {
        if (q <= quantite)
            quantite -= q;
        else
            cout << "Stock insuffisant !" << endl;
    }

    void ajouter(int q) {
        quantite += q;
    }
};




//int main() {
//    Produit p;
//    p.initialise(101, 50.0, 10);
//    p.affiche();
//    cout << "Prix TTC: " << p.prixttc() << endl;
//    cout << "Prix total en stock: " << p.prix_total() << endl;
//
//    p.retirer(3);
//    p.affiche();
//
//    p.ajouter(5);
//    p.affiche();
//    return 0;
//
//}


/// EXERCICE 2

class CompteBancaire {
private:
    int numero;
    float solde;

public:
    void initialise(int n, float s) {
        numero = n;
        solde = s;
    }

    void deposer(float montant) {
        solde += montant;
    }

    void retirer(float montant) {
        if (solde >= montant) {
            solde -= montant;
        } else {
            cout << "Solde insuffisant" << endl;
        }
    }

    void afficher() {
        cout << "Numéro de compte: " << numero << ", Solde: " << solde << endl;
    }

    // void virement(CompteBancaire & , float);
    void virement(CompteBancaire &dest, float montant) {
        if (solde >= montant) {
            retirer(montant); // solde = solde - montant
            dest.deposer(montant); // dest.solde= dest.solde + montant
        } else {
            cout << "Solde insuffisant pour effectuer le virement" << endl;
        }
    }
};
//
//int main() {
//    CompteBancaire compte1, compte2;
//    compte1.initialise(12345, 1000.0);
//    compte2.initialise(67890, 500.0);
//
//    compte1.afficher();
//    compte2.afficher();
//
//    compte1.deposer(200.0);
//    compte1.afficher();
//
//    compte1.retirer(300.0);
//    compte1.afficher();
//
//    compte1.virement(compte2, 400.0);
//    compte1.afficher();
//    compte2.afficher();
//
//return 0;
//}


















