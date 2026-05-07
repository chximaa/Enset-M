//Exercice 1
/*#include<stdio.h>
main(){
int x,y,z;
printf("donner l'intervale [x,y]");
scanf("%d %d",&x,&y);
printf("voulez vous les nbrs paires=0 ou impaires=1?");
scanf("%d", &z);
//while
while (x<=y){
    if(x%2==0 && z==0){
        printf("%d est pair\n",x);
    }
    else if (x%2!=0 && z==1){
       printf("%d est impair\n",x);
    }
    x++;
}

//do-while
do {
   if(x%2==0 && z==0){
        printf("%d est pair\n",x);
    }
    else if (x%2!=0 && z==1){
       printf("%d est impair\n",x);
    }
    x++;} while (x<=y);

}
//for
for (x;x<=y;x++){
    if(x%2==0 && z==0){
        printf("%d est pair\n",x);
    }else if (x%2!=0 && z==1){
       printf("%d est impair\n",x);
    }
}
}
*/

//Exercice 2
#include<stdio.h>
main(){
    int nmbr;
    int somme = 0;
    int i = 0;

printf("Donner une suite de nombres non nuls (fin avec 0) :\n");

do{
    scanf("%d", &nmbr);
    if (nmbr != 0) {
        somme += nmbr;
        i++;}
    } while (nmbr != 0);

if(i > 0) {
    printf("La moyenne des nombres est : %.2f\n",(float)somme /i);
}else {
    printf("Aucun nombre valide n'a été entré.\n");
}
}

//Exercice 3
/*#include <stdio.h>
main() {

char phrase[1000];
int j = 0;

printf("donner une phrase termine par un point :\n");
if (fgets(phrase,999, stdin) != NULL) {

    for (int i = 0; phrase[i] != '.' && phrase[i] != '\0'; i++) {

        if ((phrase[i]=='L' || phrase[i]=='l') && (phrase[i+1]=='E' || phrase[i+1]=='e')) {
            j++;
        }
    }

    printf("Le nombre de fois ou 'L' est suivi de 'E' est : %d\n", j);
} else {
    printf("Erreur lors de la lecture de la phrase.\n");
}
}*/

//Exercice 4
/*#include <stdio.h>
main() {
    int n = 1;
    double suite;

    printf("Les termes de la suite u(n) = 1/(2n) :\n");
    do {
        suite = 1.0 / (2 * n);
        printf("u(%d) = %.7f\n", n, suite);
        n++;
    } while (suite >= 0.0001);

}*/

//Exercice 5
/*#include <stdio.h>
//#include <stdbool.h>
main() {
    int n;
    int groupe_max = 0, total_etudiants = 0;
    int note, i = 0, superieur_ou_egal_10 = 0;

    double moyenne_max = 0.0, moyenne_classe = 0.0, somme = 0.0, moyenne_groupe;

printf("donner le nombre de groupes : ");
scanf("%d", &n);

for (int g = 1; g <= n; g++) {
    printf("\ndonner les notes du groupe %d (fin avec -1) :\n", g);

    while (1) {
        scanf("%d", &note);
        if (note == -1) {
            break;
        }
        somme += note;

        if (note >= 10) {
            superieur_ou_egal_10++;
        }
        i++;
    }
    moyenne_groupe =somme / i;
    //1 et 2
    printf("group %d :\n", g);
    printf("nombre d'etudiants avec note >= 10 : %d\n", superieur_ou_egal_10);
    printf("moyenne du groupe : %.2f\n", moyenne_groupe);


    moyenne_classe += somme;
    total_etudiants += i;


    if (moyenne_groupe > moyenne_max) {
        moyenne_max = moyenne_groupe;
        groupe_max = g;
    }
}

//3
moyenne_classe = moyenne_classe / total_etudiants;
printf("\nmoyenne de la classe : %.2f\n", moyenne_classe);

//4
if (groupe_max > 0) {
    printf("le groupe avec la moyenne la plus eleveeest le groupe %d (%.2f).\n", groupe_max, moyenne_max);
} else {
    printf("aucun groupe n'a ete saisi.\n");
}

}
*/














