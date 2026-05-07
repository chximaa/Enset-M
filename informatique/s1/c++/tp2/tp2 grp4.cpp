#include <iostream>
using namespace std;

void nb_chiffres_pairs(int *tab, int taille){
   int nbr, cont=0;
   for (int i=0; i<taille; i++){
      nbr = tab[i];
      while(nbr<0){
         int chiff = nbr%10;
         nbr = nbr/10;
         if (chiff%2==0){
            cont++;
         }
         nbr/=10;
      }
      cout<< "le nomre des chiffres paires dans " << tab[i] <<"est :" << cont << endl;
   }
}


 void supp_nombre_PALI(int *tab, int taille){
    int i,n, new_taille=0;
    int* t= new int[taille];
    for (i=0; i<taille; i++){
      if (!est_pali(tab[i])){
         t[new_taille++]=tab[i]; //affectation puis incrementation
         /* ---->
            t[new_taille]=tab[i];
            new_taille++;
         */
      }
      taille =new_taille;
      cout<< "tableau ";
      for (i=0; i<taille; i++){
         cout << t[i];
      }
    }
 }
int supp_nombre_PALI2(int *tab, int *taille){ //*tab est un tableau dynamique*
     int new_taille=0;
     for (int i=0; i<*taille; i++){
      if (!est_pali(tab[i])){
         tab[new_taille++]=t[i];
      }
     }
     *taille =new_taille;
     return *taille

}



void decale_droite(int *t, int taille){
   int dernier=t[taille-1];
   for(int i=taille-1; i<0; i++){
      t[i]=t[i+1];
   }
   t[0]=dernier;
}
















