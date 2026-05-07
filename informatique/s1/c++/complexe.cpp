#include <iostream>
#include<math.h>
using namespace std;

class Complexe{
   float re,im; //les attributs

   public: // les methodes
      Complexe(float, float);
      ~Complexe();
      float real(); // fonction qui retourne la partie réelle
	  float imag(); // fonction qui retourne la partie imaginaire
      float norme(); // fonction qui retourne la norme d'un complexe
      void affiche(); // fonction qui affiche les membres données d'un complexe
      Complexe conjugue(); // fonction qui retourne le conjugué d'un complexe
      Complexe somme(Complexe ); // fonction qui retourne la somme de deux complexes
      Complexe difference(Complexe); // fonction qui retourne la soustraction de deux complexes
      Complexe produit(Complexe ); // fonction qui retourne le produit de deux complexes
};


Complexe::Complexe(float r = 0, float i = 0)
{   
         re = r;
         im = i;
         cout<<"construction d'un objet "<<re<<" + "<<im<<" i\n";
      }
Complexe::~Complexe()
{cout<<"destruction d'un objet "<<re<<" + "<<im<<" i\n";
}
void Complexe::affiche(){
   cout <<"  "<< re << " + " << im << "i"<< "\n";
}

float Complexe::real(){
   return re;
}


float Complexe::imag(){
   return im;
}
float Complexe::norme(){
      return sqrt(re*re + im*im);

}


Complexe Complexe::conjugue(){
   Complexe res;
   res.re=re;
   res.im=-im;
   return res; // ou bien return Complexe(re,-im)
}

Complexe Complexe::somme(Complexe z){
   Complexe res;
   res.re= re+ z.re;
   res.im= im+ z.im;
   return res; // ou bien return Complexe(re+z.re, im+z.im)
}
//
//
//Complexe Complexe::somme(Complexe &z){
//   return Complexe(re+z.re , im+z.im);
//}


Complexe Complexe::difference(Complexe z){
   return Complexe(re-z.re , im-z.im);
}


Complexe Complexe::produit(Complexe z){
   Complexe res;
   res.re= re * z.re - im * z.im;
   res.im=  re * z.im + im * z.re;
   return res; // ou bien return Complexe( re * z.re - im * z.im, re * z.im + im * z.re)
}


main(){
   Complexe A,B(3),C(7,4);
   /*cout<<"l'objet A est";
   A.affiche();
   cout<<"l'objet B est";
   B.affiche();
   cout<<"l'objet C est";
   C.affiche();*/
   cout<<"la partie reelle de C est :"<< C.real()<<"\n";
   cout<<"la partie imaginaire de C est :"<< C.imag()<<"\n";
   cout<<"la norme de C est: "<<C.norme()<<"\n";
   float x,y;
   cout<<"entrer la parite reelle et imaginaire: ";
   cin>>x>>y;
   Complexe D(x,y),U;
   U=D.conjugue();
   cout<<"le conjuge de D est:";
   U.affiche();
   Complexe S;
   S= B.somme(C);
   cout<<"la somme du B et C est:";
   S.affiche();
   Complexe Sd;
   Sd=C.difference(D);
   cout<<"la difference de C et D:";
   Sd.affiche();
   Complexe P;
   P=D.produit(D);
   P.affiche();
}


// ajouter dans tous les mthodes (const complexe &z)
























