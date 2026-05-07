#include<iostream>
#include <cstring>
using namespace std;

/// EXERCICE 1

//class Pile_entier{
//    int *pile, taille, h;
//public:
//    Pile_entier(int l=20){
//        taille= l;
//        pile= new int[taille];
//        h=0;
//    }
//    ~Pile_entier(){
//        delete [] pile;
//        cout<< "Destructeur appelé";
//    }
//    void affiche();
//    int pleine();
//    int vide();
//    void empile(int);
//    int depile();
//};
//
//void Pile_entier::affiche(){
//    cout << "Pile : " << "\n";
//    for (int i=0; i<h; i++){
//        cout << pile[i] << " ";
//    }
//}
//
//int Pile_entier::pleine(){
//    if (taille==h){
//        return 1;
//    }
//    return 0; //ou bien return taille == h
//}
//
//int Pile_entier::vide(){
//    return h==0;
//}
//
//void Pile_entier::empile(int a){
//    if (pleine()){
//        cout << "la pile est pleine";
//    }else{
//        pile[h++]=a; // <=> pile[h] =a; h++;
//    }
//}
//
//int Pile_entier::depile(){
//    if(vide()){
//        cout << "Pile est vide";
//        return -1;
//    }else{
//        return pile[--h];
//    }
//}


///EXERCICE 2 PROF

/*
char= tableau de caractere
*/

class Chaine{
   int l; //longueur
   char *adr;
public:
   Chaine(){
      l=0;
      adr= new char[l+1]; // ou bien dirrectement adr= new char[1]
      adr[0]='\0'; // il n'existe pas une chaine vide toujours il contient '\0' meme si la longueur =0
   }

   Chaine(char *texte){
      l = strlen(texte);
      adr = new char[l+1];
      //strcpy(adr, texte);
      for (int i=0; i<l; i++){
         adr[i]=texte[i];
      }
      adr[l]='\0';
   }

   Chaine(const   Chaine &str){
      l = str.l;
      adr= new char[l+1];
      for(int i=0; i<l; i++){
         adr[i]= str.adr[i];
      }
      adr[l]='\0';
   }

   ~Chaine(){
      delete[] adr;
   }
   void assigner(const Chaine&);
   int estEgal(const Chaine&);
   Chaine concatener(const Chaine&);
   char caractereA(int);
   void afficher();
   int trouverA(char);
   Chaine supprimerA(char);
   Chaine supprimerI(int);
};


void Chaine::assigner(const Chaine &str){
    if (this != &str) {
        //delete[] adr;
        l = str.l;
        adr = new char[l + 1];
        strcpy(adr, str.adr);
    }
}



char Chaine::caractereA(int index) {
    if (index < 0 || index >= l) {
        cout << "Indice invalide !" << endl;
        return '\0'; //ou return -1;
    }
    return adr[index];
}


int Chaine::trouverA(char A){
   for(int i=0; i<l; i++){
      if (adr[i]==A){
         return i;
      }
   }
   return -1;
}

void Chaine::afficher() {
    cout << adr << endl;
}

Chaine Chaine::supprimerA(char A){
   int neew=0;
   char* chaine2= new char[l];
   for(int i=0; i<l; i++){
         if(adr[i]!=A){
            chaine2[neew++]=adr[i];
         }
   }
   chaine2[neew]='\0';
   return chaine2;

}


Chaine Chaine::supprimerI(int indice){
   int neew=0;
   char* chaine2= new char[l];
   for (int i=0; i<l; i++){
      if(indice!=i){
         chaine2[neew++]=adr[i];
      }
   }
      chaine2[neew]='\0';
   return chaine2;
}

main(){

   Chaine c1("hello");
   //cout<<c1.supprimerA('l');
   c1.afficher();

   Chaine c2 = c1.supprimerI(3);
   c2.afficher();
}








///EXERCICE 2

//class Chaine {
//private:
//    int longueur;
//    char* contenu;
//
//public:
//    Chaine();                // constructeur vide
//    Chaine(const char*);     // constructeur à partir d'une chaîne C
//    Chaine(const Chaine&);   // constructeur par recopie
//    ~Chaine();               // destructeur
//
//    void assigner(const Chaine&);
//    int estEgal(const Chaine&);
//    Chaine concatener(const Chaine&);
//    char caractereA(int);
//    void afficher();
//};
//
//
//Chaine::Chaine() {
//    longueur = 0;
//    contenu = new char[1];
//    contenu[0] = '\0';
//}
//
//Chaine::Chaine(const char* str) {
//    longueur = strlen(str);
//    contenu = new char[longueur + 1];
//    strcpy(contenu, str);
//}
//
//Chaine::Chaine(const Chaine& autre) {
//    longueur = autre.longueur;
//    contenu = new char[longueur + 1];
//    strcpy(contenu, autre.contenu);
//}
//
//Chaine::~Chaine() {
//    delete[] contenu;
//}
//
//void Chaine::assigner(const Chaine& autre) {
//    if (this != &autre) {
//        delete[] contenu;
//        longueur = autre.longueur;
//        contenu = new char[longueur + 1];
//        strcpy(contenu, autre.contenu);
//    }
//}
//
//int Chaine::estEgal(const Chaine& autre) {
//    return strcmp(contenu, autre.contenu) == 0;
//}
//
//Chaine Chaine::concatener(const Chaine& autre) {
//    Chaine resultat;
//    delete[] resultat.contenu;
//
//    resultat.longueur = longueur + autre.longueur;
//    resultat.contenu = new char[resultat.longueur + 1];
//
//    strcpy(resultat.contenu, contenu);
//    strcat(resultat.contenu, autre.contenu);
//
//    return resultat;
//}
//
//char Chaine::caractereA(int index) {
//    if (index < 0 || index >= longueur) {
//        cout << "Indice invalide !" << endl;
//        return '\0';
//    }
//    return contenu[index];
//}
//
//void Chaine::afficher() {
//    cout << contenu << endl;
//}






























