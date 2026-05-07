//EXERCICE1
/*#include<stdio.h>>
main(){
int x,y;
float d;
printf("donner x");
scanf("%d", &x);
printf("donner y");
scanf("%d", &y);
printf("La somme de x et y: %d\n", x+y);
printf("Le produit de x et y: %d\n", x*y);
printf("La devision entier de x et y: %d\n", x/y);
printf("Le reste devision entier de x et y: %d\n", x%y);
d=(float)x/y;
printf("La devision reelle de x et y: %.3f\n", d);
}*/


//EXERCICE2
/*#include<stdio.h>
main(){
int x,y,z;
printf("donner x: ");
scanf("%d", &x);
printf("donner y: ");
scanf("%d", &y);
z=x;
x=y;
y=z;
printf("x= %d\ny= %d\n ",x,y);}
*/

//EXERCICE3
/*#include<stdio.h>
main() {
int a;
float b=0;

printf("Donner le premier nombre:");
scanf("%d", &a);
b=b+a;

printf("Donner le deuxieme nombre:");
scanf("%d", &a);
b=b+a;

printf("Donner le troisieme nombre:");
scanf("%d", &a);
b=b+a;

printf("Donner le quatrieme nombre:");
scanf("%d", &a);
b=b+a;

printf("Donner le cinqieme nombre:");
scanf("%d", &a);
b=b+a;

b=b/5;
printf("La moyenne des 5 entiers est: %.2f\n", b);

}*/


//EXERCIE4
/*#include<stdio.h>
main() {
    int x,a1,a2,b1,b2,c1,c2;
printf("donner le nombre: ");
scanf("%d", &x);
a1=x/1000;
a2=x%1000;
b1=a2/100;
b2=a2%100;
c1=b2/10;
c2=b2%10;
printf("%d + %d*10 + %d*10^2+ %d*10^3", c2 , c1 , b1 , a1);
}*/

// exercice 5
/*SCCF#include<stdio.h>
main() {
    float taxe, TTC, prix;
printf("donner le prix");
scanf("%f", &prix);
taxe= prix*0.2;
TTC= taxe + prix;
printf("le prix toute taxes comprise TTC= %.2f", TTC);
}*/

//EXERCICE 6
/*#include <stdio.h>
main() {
    int poule, lapins, moutons, x;
    float ppoule, llapins, mmoutons;
printf("donner le nbr des poules");
scanf("%d", &poule);
printf("donner le prix d'une poule");
scanf("%f", &ppoule);

printf("donner le nbr des lapins");
scanf("%d", &lapins);
printf("donner le prix d'un lapins");
scanf("%f", &llapins);

printf("donner le nbr des  moutons");
scanf("%d", & moutons);
printf("donner le prix d'un moutons");
scanf("%f", &mmoutons);

printf("le capitale = %.2f \n", ppoule*poule + llapins*lapins +mmoutons*moutons);
x=poule*2 + lapins*4 + moutons*4;
printf("le nombre totale de pattes des animaux de l'elevage est %d", x);
}
*/

//exercice 7
#include  <math.h>
#include  <stdio.h>
main(){
float l,r,h,a,b,c;
printf("donner la longueur des pans :");
scanf("%f", &l);
printf("donner le rayon de cylindre :");
scanf("%f", &r);
printf("donner la hauteur de l'ecrou :");
scanf("%f", &h);
a=(3* sqrt(3))/2 * pow(l,2) * h;
b=3.14 * pow(r,2) * h;
c= a-b;
printf("le volume de l'ecrou est : %.2f", c);
}



