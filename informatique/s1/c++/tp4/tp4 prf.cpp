#include <iostream>
#include<math.h>
using namespace std;

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



///// Exercice 2
class Fraction{
   int num;
   int den;
   int pgcd(int, int);
   void normalise();

public:
   Fraction(){
      num=0;
      den=1;
      normalise();
   }
   Fraction(int i){
      num=i;
      den=1;
      normalise();
   }
   Fraction (int num, int den){
      if (den!=0){
         this->num=num;
         this->den=den;
      }
      normalise();
   }
   void affiche();
   Fraction somme (const Fraction & f);
   Fraction difference(const Fraction & f);
   Fraction produit(const Fraction & f);
   Fraction division(const Fraction & f);
};


void Fraction::affiche(){
   if(den==1) cout << num;
   cout << num << "/" << den << "\n";
}

Fraction Fraction::somme(const Fraction &f){
   return Fraction(num*f.den + f.num*den, den*f.den);
}

Fraction Fraction::difference(const Fraction &f){
   return Fraction(num*f.den - f.num*den, den*f.den);
}

Fraction Fraction::produit(const Fraction &f){
   return Fraction(num*f.num , den*f.den);
}

Fraction Fraction::division(const Fraction &f){
   if(f.num==0) cout << "!Devision par 0!!" << "\n";
   else return Fraction(num*f.den , f.num*den);
}

int Fraction::pgcd(int x, int y) {
    while (y != 0) {
        int temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}

void Fraction::normalise(){
   if (den < 0) {
        num = -num;
        den = -den;
    }
   int div= pgcd(num,den);
   num /= div;
   den /= div;
}


int main() {
    int num, den;

    cout << "Entrez la première fraction (numérateur dénominateur) : ";
    cin >> num >> den;
    Fraction f1(num, den);

    cout << "Entrez la deuxième fraction (numérateur dénominateur) : ";
    cin >> num >> den;
    Fraction f2(num, den);

    Fraction f3(3, 4);
    Fraction f4(5, 8);

    //Fraction expr = (f1.somme(f3).difference(f2)).division(f1.produit(f2).difference(f4)).somme(Fraction(4));
   Fraction N= (f1.somme(f3)).difference(f2);
   Fraction D= (f1.produit(f2)).difference(f4);
   Fraction exp= (N.division(D)).somme(Fraction(4));
    cout << "Résultat de l'expression : ";
   exp.affiche();

    return 0;
}

///// Exercice sup   //surdefinition des operateurs, ou la charge des operateurs
//class Fraction{
//   int num;
//   int den;
//   int pgcd(int, int);
//   void normalise();
//
//public:
//   Fraction(){
//      num=0;
//      den=1;
//      normalise();
//   }
//   Fraction(int i){
//      num=i;
//      den=1;
//      normalise();
//   }
//   Fraction (int num, int den){
//      if (den!=0){
//         this->num=num;
//         this->den=den;
//      }
//      normalise();
//   }
//
//
//   void affiche();
//   Fraction operator-(const Fraction & f);
//   Fraction operator*(const Fraction & f);
//   Fraction operator/(const Fraction & f);
//   Fraction operator+(const Fraction &f);
//};
//
//
//void Fraction::affiche(){
//   if(den==1) cout << num;
//   cout << num << "/" << den << "\n";
//}
//
//Fraction Fraction::operator+(const Fraction &f){
//   return Fraction(num*f.den + f.num*den, den*f.den);
//}
//
//Fraction Fraction::operator-(const Fraction &f){
//   return Fraction(num*f.den - f.num*den, den*f.den);
//}
//
//Fraction Fraction::operator*(const Fraction &f){
//   return Fraction(num*f.num , den*f.den);
//}
//
//Fraction Fraction::operator/(const Fraction &f){
//   if(f.num==0) cout << "!Devision par 0!!" << "\n";
//   else return Fraction(num*f.den , f.num*den);
//}
//
//int Fraction::pgcd(int x, int y) {
//    while (y != 0) {
//        int temp = y;
//        y = x % y;
//        x = temp;
//    }
//    return x;
//}
//
//void Fraction::normalise(){
//   if (den < 0) {
//        num = -num;
//        den = -den;
//    }
//   int div= pgcd(num,den);
//   num /= div;
//   den /= div;
//}
//
//





