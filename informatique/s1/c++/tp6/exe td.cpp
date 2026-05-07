#include <iostream>
using namespace std;

class Ens{
   int *t, taille, nbelts;
public:
   Ens(int n=20){
      taille=n;
      t=new int [taille];
      nbelts=0;
   }

   Ens(const Ens &e){ //constructeur par recopie
      taille=e.taille;
      t= new int [taille];
      nbelts=e.nbelts;
      for(int i=0; i<nbelts; i++){
         t[i]=e.t[i];
      }
   }

   ~Ens(){delete [] t;}

   int operator > (int);
   int operator > (const Ens &);
   void operator + (int);
   Ens operator +(const Ens &);
   Ens operator =(const Ens &);
   void afficher();
};

int Ens::operator>(int a){
   for(int i=0; i<nbelts; i++){
      if(t[i]==a){
         return 1;
      }
   }
   return 0;
}


/// return 0 == false
/// return 1 == true

int Ens::operator>(const Ens &e){
   if(nbelts>=e.nbelts){
      for(int i=0; i<e.nbelts; i++){
         if(!((*this)>e.t[i])){
            return 0;
         }
         /* ou bien
            if((*this)>e.t[i])==0){return 0;}
         */
      }
      return 1;
   }
   return -1;
}

void Ens::operator+(int a){
   if(nbelts==taille){
      cout<< "Ensemble plein!!\n";
   }
   else{
      if ((*this)>a){
         cout<< "Element existe\n";
      }
      else{
         t[nbelts++]=a;
      }
   }
}

Ens Ens::operator+(const Ens &e){
   Ens res(taille+e.taille);  // ou bien nbelts+e.nbelts;
   for(int i=0; i<nbelts; i++){
      res.t[i]=t[i];
   }
   res.nbelts=nbelts;
   for(int i=0; i<e.nbelts; i++){
      res+e.t[i];
   }

   return res;
}


Ens Ens::operator=(const Ens &e){
   if(this!=&e){
      delete t;
      taille=e.taille;
      t= new int [taille];
      nbelts=e.nbelts;
      for(int i=0; i<nbelts; i++){
         t[i]=e.t[i];
      }
   }
   return (*this);
}






















