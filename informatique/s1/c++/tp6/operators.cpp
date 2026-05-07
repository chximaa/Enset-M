#include <iostream>
#include<math.h>
using namespace std;

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
   Fraction operator-(const Fraction & f);
   Fraction operator*(const Fraction & f);
   Fraction operator/(const Fraction & f);
   Fraction operator+(const Fraction &f);
};


void Fraction::affiche(){
   if(den==1){cout << num;}
   cout << num << "/" << den << "\n";
}

Fraction Fraction::operator+(const Fraction &f){
   return Fraction(num*f.den + f.num*den, den*f.den);
}

Fraction Fraction::operator-(const Fraction &f){
   return Fraction(num*f.den - f.num*den, den*f.den);
}

Fraction Fraction::operator*(const Fraction &f){
   return Fraction(num*f.num , den*f.den);
}

Fraction Fraction::operator/(const Fraction &f){
   if(f.num==0) cout << "!Devision par 0!!" << "\n";
   else return Fraction(num*f.den , f.num*den);
}



main(){
    cout << "Entrez la première fraction (numerateur denominateur) : ";
    int num,den;
    cin >> num >> den;
    Fraction f1(num, den);

    cout << "Entrez la deuxième fraction (numerateur denominateur) : ";
    cin >> num >> den;
    Fraction f2(num, den);

    Fraction f3(3, 4);
    Fraction f4(5, 8);

    //Fraction expr = (f1.somme(f3).difference(f2)).division(f1.produit(f2).difference(f4)).somme(Fraction(4));
   Fraction N= (f1+f3)-f2;
   Fraction D= (f1*f2)-f4;
   Fraction exp= (N/D)+Fraction(4);
    cout << "Résultat de l'expression : ";
   exp.affiche();
}
