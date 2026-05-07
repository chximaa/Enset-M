//EXERCICE 1
/*#include<stdio.h>
int somme_tableau(int tableau[], int n){
   int somme=0;
   for(int i=0; i<n; i++){
      somme += tableau[i];
   }
   return somme;
}

int recherche(int tableau[], int n, int val){
   for (int i=0; i<n; i++){
      if(tableau[i] == val){
         return i+1;
         }
      }
   return -1;
}

void trier_tableau(int tableau[], int n){
   int i, min, j, temps;
   for(i=0; i<n; i++){
         min =i;
      for (j=i+1; j<n; j++){
         if (tableau[j]<tableau[min]){
            min=j;
         }
      }
      if (min != i){
         temps=tableau[i];
         tableau[i]=tableau[min];
         tableau[min]=temps;
      }
   }
}


void nombre_paires(int tableau[], int n){
   printf("Les nombres paires sont : \n");
   for (int i=0; i<n; i++){
      if (tableau[i] % 2 ==0){
         printf("%d ,", tableau[i]);
      }
   }
   printf("\n");
}

int main(){
   int tab[10];
   remplire le tableau
   printf("saisir 10 entiers : \n");
   for(int i=0; i<10; i++){
      scanf("%d", &tab[i]);
   }

   afiicher le tableau
   for (int j=0; j<10; j++){
      printf("T[%d] : %d\n", j+1, tab[j]);
   }

   Somme des element du tableau
   printf("la somme est %d\n\n", somme_tableau(tab, 10));


   Rechercher un valeur dans le tableau
   int val;
   printf("Entrer la valeur a rechercher : ");
   scanf("%d", &val);
   int x= recherche(tab, 10, val);
   if(x != -1){
      printf("La valeur %d se trouve dans la position %d : ", val, x);
   }
   else {
      printf("la valeur ne se trouve pas dans le tableau");
   }

   trier le tableau en ordre croissant
   trier_tableau(tab, 10);

   afficher tous les nombres paire du tableau
   nombre_paires(tab, 10);


return 0;
}

*/


////EXRCICE2
//#include<stdio.h>
//int max_tableau(int tab[], int n){
//   int max= tab[0];
//   for (int i=1; i<n; i++){
//      if (max<tab[i]){
//         max = tab[i];
//      }
//   }
//   return max;
//}
//
//void remplace_18(int tab[], int n){
//   for (int i=0; i<n; i++){
//      if (tab[i]%2==0){
//         tab[i]=18;
//      }
//   }
//}
//
//float moyenne(int tab[], int n){
//   int somme=0;
//   for (int i=0; i<n; i++){
//      somme += tab[i];
//   }
//   float moy= (float) somme/n;
//
//  return moy;
//}
//
//void affiche(int tab[], int n){
//   for (int i=0; i<n; i++){
//      printf("T[%d] = %d \n", i+1, tab[i]);
//   }
//}
//
//
//int main(){
//   int t[10];
//   printf("Entrer les 10 elements du tableau : \n");
//   for (int i=0; i<10; i++){
//      printf("T[%d] = ", i+1);
//      scanf("%d", &t[i]);
//   }
//   //Afficher le max
//   int max;
//   max = max_tableau(t, 10);
//   printf("Le max du tableau est %d \n", max);
//   //Moyenne
//   float mo = moyenne(t, 10);
//   printf("Le moyenne des notes est : %.2f \n\n", mo);
//
//
//   //Remlpacer par 18
//   printf("Avant : \n");
//   affiche(t, 10);
//   remplace_18(t, 10);
//   printf("\nApres : \n");
//   affiche(t, 10);
//
//}



//EXERCICE3
//typedef struct{
//   char nom[50];
//   int age;
//   float moyenne;
//}Etudiant;
//
//void afficher_meilleur_etudiant(Etudiant etu[], int n){
//   int index_max=0;
//   for (int i=0; i<n; i++){
//      if (etu[i].moyenne > etu[index_max].moyenne){
//      index_max = i;
//      }
//   }
//   printf("Le meilleur etudiant est : %s, avec un moyenne de %.2f: \n\n", etu[index_max].nom, etu[index_max].moyenne);
//}
//
//
//
//int main(){
//   int taille;
//   printf("Donner le nombre des etudiants : ");
//   scanf("%d", &taille);
//   Etudiant etudiant[taille];
//
//
//   // Saisie des informations des étudiants
//   for (int i = 0; i < taille; i++) {
//      printf("Etudiant %d :\n", i + 1);
//      printf("Nom : ");
//      scanf("%s", etudiant[i].nom);
//      printf("Age : ");
//      scanf("%d", &etudiant[i].age);
//      printf("Moyenne : ");
//      scanf("%f", &etudiant[i].moyenne);
//      printf("\n");
//   }
//   // Affichage les informations
//   //printf("\nNom : %s, Age : %d, Moyenne : %.2f\n", etudiant.nom, etudiant.age, etudiant.moyenne);
//   printf("Les informations des etudiants : \n\n");
//   for (int i=0; i<taille; i++){
//      printf("---Etudiant n : %d---\n", i+1);
//      printf("Nom : %s \nAge : %d \nMoyenne : %.2f\n\n", etudiant[i].nom, etudiant[i].age, etudiant[i].moyenne);
//   }
//
//   //Afficher la meuilleur note
//   afficher_meilleur_etudiant(etudiant, taille);
//}



//EXERCICE4
#include<stdio.h>
#include<string.h>
int compter_voyelles(char chaine[], int n){
   int nbr=0;
   for (int i=0; i<n; i++){
      if (chaine[i]=='a' || chaine[i]=='e' || chaine[i]=='i' || chaine[i]=='o' || chaine[i]=='u' || chaine[i]=='A' || chaine[i]=='E' || chaine[i]=='I' || chaine[i]=='O' || chaine[i]=='U'){
         nbr=nbr+1;
      }
   }
   return nbr;
}

void inverse_chaine(char chaine[], int n){
}




int main(){
   char chaine[50];
   int longueur;
   printf("Donner une chaine de caractere : ");
   fgets(chaine, sizeof(chaine), stdin); //entrer une
   chaine[strcspn(chaine, "\n")] = '\0';
//scanf("%s", chaine);
   longueur = strlen(chaine);
   printf("La longueur du chaine de caractere est : %d\n", longueur);
//   for (int i=0; i<50; i++){
//      if (chaine[i]!= " " && chaine[i]!= "\n"){
//         longueur= longueur+1;
//      }
//      else {
//         break;
//      }
//   }
//   printf("La longueur du chaine de caracter : %d", longueur);

   int voyelle = compter_voyelles(chaine, 50);
   printf("Le nombre de voyelles dans la chaine : %d", voyelle);
   return 0;
}






//EXERCICE5
//   int main(){
//   int taille;
//   printf("Donner la taille du tableau :  ");
//   scanf("%d", &taille);
//   int tab[taille];
//
//   //Remplire
//   for (int i=0; i<taille; i++){
//   printf("T[%d] = ", i+1);
//   scanf("%d", &tab[i]);
//   }
//
//   //Afficher
//   for (int i=0; i<taille; i++){
//   printf("T[%d] = %d", i+1, tab[i]);
//   }
//}

















