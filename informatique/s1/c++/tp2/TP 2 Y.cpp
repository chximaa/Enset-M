#include <iostream>
using namespace std;

//Saisie d'un tableau dynamique
void saisie(int *t, int taille){
   for (int i=0;i<taille;i++){
      cout << "Entrer l'element numero" << i+1 << " :";
      cin >>t[i];
   }
}

//Afficher le tableau
void affiche(int* t, int taille) {
   cout << "Les element du tableau : \n";
    for (int i = 0; i < taille; i++) {
        cout << t[i] << " | ";
    }
    cout << endl;
}

//Retourne le plus grand element du tableau
int maximum(int *t, int taille){
   int maxi=t[0];
   for (int i=1;i<taille;i++){
      if(maxi<t[i]){
         maxi=t[i];
      }
   }
   return maxi;
}

//Affiche tous les nombres qui se terminent par 8
void affiche_8(int *t, int taille){
   for (int i=0;i<taille;i++){
      if (t[i]%10==8){
         cout << t[i] << " | ";
      }
   }
}

//Affiche tous les multiples de 3 et leur nombre total.
void affiche_3(int *t, int taille){
   int nbr=0;
   for (int i=0;i<taille;i++){
      if (t[i]%3==0){
         cout << t[i] << " | ";
         nbr+=1;
      }
   }
   cout << endl;
   cout << "le nombre totale des multiples de 3 : " << nbr<< "\n";

}



//Ajoute 5 à tous les nombres se terminant par 2.
void ajout_dernier_chiffre(int *t, int taille){
   for (int i=0;i<taille;i++){
      if (t[i]%10==2){
         t[i]+=5;
      }
   }
}


//Trouve la valeur la plus répétée dans le tableau.
int occurance_max(int *t, int taille){

    int max_count = 0, max_value = t[0];

    for (int i = 0; i <taille; i++) {
        int counte = 0;

        for (int j = 0; j < taille; j++) {
            if (t[j] == t[i]) {
                counte++;
            }
        }
        // Mettre à jour si on trouve un élément plus fréquent
        if (counte > max_count) {
            max_count = counte;
            max_value = t[i];
        }
    }

    return max_value;

}

//Trie le tableau en ordre décroissant.
void tri_decroissant(int* t, int taille) {
    for (int i = 0; i < taille - 1; i++) {
        for (int j = i + 1; j < taille; j++) {
            if (t[i] <t[j]) {
                swap(t[i], t[j]);
            }
        }
    }
}


//le nombre d'element dans un intervalle [a,b]
int nb_element_intervalle(int *t,int a, int b){
   if (b<a){
      swap (a,b);
   }
   int nbr = 0;
   for (int i=a;i<=b;i++){
      nbr++;
   }
   return nbr;
}



//supprimer les occurrences d'un nombre dans le tableau
void supp_occurence(int*& t, int& taille, int val) {
    int newSize = 0;
    for (int i = 0; i < taille; i++) {
        if (t[i] != val)
            newSize++;
    }
    int* newT = new int[newSize];
    int j = 0;
    for (int i = 0; i < taille; i++) {
        if (t[i] != val)
            newT[j++] = t[i];
    }
    delete[] t;
    t = newT;
    taille = newSize;
}

//Décale à gauche tous les éléments du tableau
void decale_gauche(int* t, int taille) {
    if (taille > 1) {
        int temp = t[0];
        for (int i = 0; i < taille - 1; i++)
            t[i] = t[i + 1];
        t[taille - 1] = temp;
    }
}

























main(){
int tab[10]={3,2,3,1,3,4,2,3,2,3};
cout << "le occurance max " <<occurance_max(tab, 10);
}

















