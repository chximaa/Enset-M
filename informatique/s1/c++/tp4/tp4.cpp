#include <iostream>
#include<math.h>
using namespace std;

///EXERCICE 1
//class Complexe{
//   float re,im; //les attributs
//
//   public: // les methodes
//
//      /// constructeur
//      Complexe(float r = 1, float i = 0){
//         re = r;
//         im = i;
//      }
//
//      /// Desctructeur
//      ~Complexe() ;
//
//      float real(); // fonction qui retourne la partie réelle
//      float imag(); // fonction qui retourne la partie imaginaire
//      float norme(); // fonction qui retourne la norme d'un complexe
//      void affiche(); // fonction qui affiche les membres données d'un complexe
//      Complexe conjugue(); // fonction qui retourne le conjugué d'un complexe
//      Complexe somme(const Complexe &); // fonction qui retourne la somme de deux complexes
//      Complexe difference(Complexe &); // fonction qui retourne la soustraction de deux complexes
//      Complexe produit(Complexe &); // fonction qui retourne le produit de deux complexes
//};
//
//
//float Complexe::real(){
//   return re;
//}
//
//float Complexe::imag(){
//   return im;
//}
//
//float Complexe::norme(){
//   return sqrt(re*re + im*im);
//}
//
//void Complexe::affiche(){
//   cout <<"C = "<< re << "+ " << im << "i"<< "\n";
//}
//
//Complexe Complexe::conjugue(){
//   Complexe c1(re, -im); // ou bien:
//   return c1;            // return Complexe(re, -im); //directement sans c1
//}
//
//Complexe Complexe::somme(const Complexe &c /*ou bien (Comlexe c)*/ ){ // const est pour garder l'objet passer par reference securisé
//   Complexe c1;
//   c1.re = re + c.re;
//   c1.im = im + c.im;
//   return c1; // ou bien return Complexe(re + c.re, im + c.im)
//}
//
// Complexe Complexe::difference(Complexe &c){
//    Complexe c1;
//    c1.re = re - c.re;
//    c1.im = im - c.im;
//    return c1;
// }
//
//Complexe Complexe::produit(Complexe &c) {
//    Complexe c1;
//    c1.re = re * c.re - im * c.im;
//    c1.im = re * c.im + im * c.re;
//    return c1;   //return Complexe(re * c.re - im * c.im, re * c.im + im * c.re);
//}
//
//int main() {
//    Complexe c1(3, 4), c2(1, -2);
//
//    cout << "Nombre complexe 1 : "; c1.affiche();
//    cout << "Nombre complexe 2 : "; c2.affiche();
//
//    Complexe somme = c1.somme(c2);
//    cout << "Somme : "; somme.affiche();
//
//    Complexe difference = c1.difference(c2);
//    cout << "Différence : "; difference.affiche();
//
//    Complexe produit = c1.produit(c2);
//    cout << "Produit : "; produit.affiche();
//
//    Complexe conj = c1.conjugue();
//    cout << "Conjugué de c1 : "; conj.affiche();
//
//    cout << "Norme de c1 : " << c1.norme() << endl;
//
//    return 0;
//}

///EXERCICE 2
#include <iostream>
using namespace std;

class Fraction {
    int num, den;
    int pgcd(int x, int y);
    void normalise();

public:
    Fraction();
    Fraction(int i);
    Fraction(int num, int den);
    Fraction(Fraction &);
    ~Fraction();

    void affiche();
    Fraction somme(const Fraction &);
    Fraction difference(const Fraction &);
    Fraction produit(const Fraction &);
    Fraction division(const Fraction &);
};

// Constructeur par défaut
Fraction::Fraction() : num(0), den(1) {}

// Constructeur avec un entier
Fraction::Fraction(int i) : num(i), den(1) {}

// Constructeur avec numérateur et dénominateur
Fraction::Fraction(int num, int den) : num(num), den(den) { normalise(); }

// Constructeur par copie
Fraction::Fraction(Fraction &f) : num(f.num), den(f.den) {}

// Destructeur
Fraction::~Fraction() {}

// Calcul du PGCD
int Fraction::pgcd(int x, int y) {
    while (y != 0) {
        int temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}

// Normalisation de la fraction
void Fraction::normalise() {
    if (den < 0) {
        num = -num;
        den = -den;
    }
    int p = pgcd(abs(num), abs(den));
    num /= p;
    den /= p;
}

// Affiche la fraction
void Fraction::affiche() { cout << num << "/" << den << endl; }

// Addition de deux fractions
Fraction Fraction::somme(const Fraction &f) {
    return Fraction(num * f.den + f.num * den, den * f.den);
}

// Soustraction de deux fractions
Fraction Fraction::difference(const Fraction &f) {
    return Fraction(num * f.den - f.num * den, den * f.den);
}

// Multiplication de deux fractions
Fraction Fraction::produit(const Fraction &f) {
    return Fraction(num * f.num, den * f.den);
}

// Division de deux fractions
Fraction Fraction::division(const Fraction &f) {
    return Fraction(num * f.den, den * f.num);
}

// Fonction principale
int main() {
    int num1, den1, num2, den2;

    cout << "Entrez la première fraction (numérateur dénominateur) : ";
    cin >> num1 >> den1;
    Fraction f1(num1, den1);

    cout << "Entrez la deuxième fraction (numérateur dénominateur) : ";
    cin >> num2 >> den2;
    Fraction f2(num2, den2);

    Fraction f3(3, 4);
    Fraction f4(5, 8);

    Fraction expr = (f1.somme(f3).difference(f2)).division(f1.produit(f2).difference(f4)).somme(Fraction(4));

    cout << "Résultat de l'expression : ";
    expr.affiche();

    return 0;
}
































