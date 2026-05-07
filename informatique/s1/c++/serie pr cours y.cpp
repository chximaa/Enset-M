#include<iostream>
using namespace std;


///Question 1
class tableau_U{
   float *t;
   int taille, nbelts;
   public:
      tableau_U (int);
      tableau_U (const tableau_U &);
      ~tableau_U();
      tableau_U& operator=(const tableau_U &);
      friend ostream& operator<<(ostream &, const tableau_U &);
      int operator>(float);
      tableau_U operator+(float);
      tableau_U operator+(const tableau_U&);
      tableau_U operator-(float x);
      tableau_U operator-(const tableau_U &);
      tableau_U& operator+=(float x);
      tableau_U operator*(float x) const;
      friend tableau_U operator*(float, const tableau_U&);
      int operator==(const tableau_U &);
      tableau_U operator<(int m);
};

///Question 2
tableau_U::tableau_U(int x=10){
   taille=x;
   nbelts=0;
   t= new float[taille];
}

tableau_U::tableau_U(const tableau_U &v){
   taille=v.taille;
   nbelts=v.nbelts;
   t=new float[taille];
   for(int i=0; i<nbelts; i++){
      t[i]=v.t[i];
   }
}

tableau_U::~tableau_U(){
   delete[] t;
}

///Question 3
tableau_U& tableau_U::operator=(const tableau_U &v){
   if(this != &v){
      delete[] t;
      taille=v.taille;
      nbelts=v.nbelts;
      t=new float[taille];
      for(int i=0; i<nbelts; i++){
         t[i]=v.t[i];
      }
   }
   return (*this);
}

///Queation 4
ostream& operator<<(ostream &o, const tableau_U &v){
   for(int i=0; i<v.nbelts; i++){
      o<<v.t[i]<<"\t";
   }
   o<<"\n";
   return o;
}


///Question 5 methode 1 (de prof)
int tableau_U::operator>(float x){
   int i=0;
   while(i<nbelts && t[i]!=x){i++;}
   if(i==nbelts){return 0;}
   else{return 1;}
}


///Question 5 methode 2
//int tableau_U::operator>(int x){
//   for(int i=0; i<nbelts; i++){
//      if(t[i]==x){
//         return 1;
//      }
//   }
//   return 0;
//}


///Question 6 partie 1
tableau_U tableau_U::operator+(float x){
   tableau_U res=(*this);
   if(!(res>x)){ // si x n'existe pas déjà dans le tableau (operator> retourne 0)
      if(res.nbelts==res.taille){  // tableau 3amer kamel
         float *nouveau = new float[res.taille+10]; //zdna 10 bach machi kola mara nb9aw nzido 1 ftableau
         for(int i=0; i<res.nbelts; i++){
            nouveau[i]=res.t[i];
         }
         delete[] res.t;
         res.t=nouveau;
         res.taille += 10;
      }
      res.t[res.nbelts++]=x; //affectation res.t[res.nbelts]=x; //puis incrementation nbelts++;
   }
   return res;
}


///Question 6 partie 2
tableau_U tableau_U::operator+(const tableau_U &v){
   tableau_U res=(*this);
   for (int i=0; i<v.nbelts; i++){
      res=res+v.t[i];
   }
   return res;
}


///Question 7 partie 1

tableau_U tableau_U::operator-(float x){
   tableau_U res;
   for(int i=0; i<nbelts; i++){
      if(t[i]!=x){
         res=res+t[i];
      }
   }
   return res;
}


///Question 7 partie 2
tableau_U tableau_U::operator-(const tableau_U &v){
   tableau_U res=(*this);
   for(int i=0; i<v.nbelts; i++){
      res= res-v.t[i];
   }
   return res;
}


///Question 8
/*
   tableau_U& →
la fonction retourne une référence à l'objet courant,
pour permettre d’enchaîner des opérations comme :
obj += 2.5 += 1.0;  // possible si += retourne une référence
*/

tableau_U& tableau_U::operator+=(float x){
   for (int i=0; i<nbelts; i++){
      t[i] += x;
   }
   return *this;
}


///Question 9 partie 1
// Multiplication tableau * réel
tableau_U tableau_U::operator*(float x) const {
   tableau_U res=(*this);
   for (int i=0; i<res.nbelts; i++){
      res.t[i] *= x;
   }
   return res;
}


///Question 9 partie 2
// Multiplication réel * tableau
tableau_U operator*(float x, const tableau_U& v) {
    return v * x;
}


///Question 10 methode 1 (de prof)
int tableau_U::operator==(const tableau_U &v){
   if(nbelts!=v.nbelts){return 0;}
   else{
      int i=0;
      while (i<nbelts && t[i]==v.t[i]){i++;}
      if(i==nbelts){return 1;}
      else{return 0;}
   }
}


///Question 10 methode 2
//int tableau_U::operator==(const tableau_U &v){
//   if(nbelts!=v.nbelts){return 0;}
//   for (int i=0; i<nbelts; i++){
//      if(!(v>t[i])){return 0;}
//   }
//   return 1;
//}


///Question 11
// Décalage circulaire vers la gauche de m positions
tableau_U tableau_U::operator<(int m){
    tableau_U res(*this);
    m = m % nbelts;
    for (int i = 0; i < nbelts; i++)
        res.t[i] = t[(i + m) % nbelts];
    return res;
}



int main() {
    // Création d'un tableau avec capacité initiale 5
    tableau_U t1(5);

    // Ajout d'éléments (utilisation operator+)
    t1 = t1 + 1.5f;
    t1 = t1 + 3.7f;
    t1 = t1 + 2.0f;

    cout << "Contenu de t1 apres ajout : " << t1;

    // Tester la présence d'un élément avec operator>
    cout << "t1 contient 3.7 ? " << (t1 > 3.7f ? "Oui" : "Non") << endl;
    cout << "t1 contient 4.0 ? " << (t1 > 4.0f ? "Oui" : "Non") << endl;
    cout<<endl;

    // Test de l'opérateur += (ajoute une valeur à chaque élément)
    t1 += 1.0f;
    cout << "t1 apres +=1.0 : " << t1;
    cout<<endl;

    // Test multiplication tableau * réel
    tableau_U t2 = t1 * 2.0f;
    cout << "t2 = t1 * 2 : " << t2;
    cout<<endl;

    // Test multiplication réel * tableau (friend)
    tableau_U t3 = 3.0f * t1;
    cout << "t3 = 3 * t1 : " << t3;
    cout<<endl;

    // Test soustraction d'un élément
    tableau_U t4 = t1 - 4.5f;
    cout << "t4 = t1 - 4.5 : " << t4;
    cout<<endl;

    // Test addition de deux tableaux
    tableau_U t5 = t1 + t4;
    cout << "t5 = t1 + t4 : " << t5;
    cout<<endl;

    // Test égalité
    cout << "t1 == t4 ? " << (t1 == t4 ? "Oui" : "Non") << endl;
    cout<<endl;

    // Test décalage circulaire à gauche (operator<)
    tableau_U t6 = t1 < 2;
    cout << "t6 = t1 decale de 2 a gauche : " << t6;
    cout<<endl;

    return 0;
}






