/*//exercice 1
#include<stdio.h>
int main(void)
{
float reel;
int entier1,entier2;
char character1,character2;
}

//exercice 3
#include <stdio.h>
main(){
    int a,b,add,sous,mult;
    float div;
    a=3;
    b=10;
    add=a+b;
    sous=a-b;
    mult=a*b;
    div=(float) a/b;
    printf("l'addition est %d\n",add);
    printf("la soustraction est%d\n",sous);
    printf("la multiplication est %d\n",mult);
    printf("la devision est %f\n",div);
    printf("le moyenne est %f\n",(float) add/2);
    printf("le carre de a est %d",a*a);

}

//exercice 4
#include <stdio.h>
main(){
int A, B;
A= 10;
B= 13;
A++;
--B;
printf("A=%d , B=%d",A,B);
}

//exercice 5
#include <stdio.h>
main(){
printf("Bonjour\nTout le monde");
}

//exercice 6
#include <stdio.h>
main(){
int a,b;
a=17;
b=25;
//a
printf("a=%d , b=%d",a);
//b
printf("\nLe double de a est:\n%d",a*2);
//c
printf("\nLa somme de a et b est:\n%d",a+b);
//d
printf("\nLa valeur de a est: %d",a);
//e
printf("\nLe double de a est: %d", a*2);
//f
printf("\nLe double de a est: %d et le double de b est: %d",a*2,b*2);
//g
printf("\nLa moyenne de a et b est: %d", (a+b)/2);
}

//exercice7
#include <stdio.h>
main(){
int a, b;
printf("Entrer la valeur de a");
scanf("%d", &a);
printf("Entrer la valeur de b");
scanf("%d", &b);
printf("%d\n", a);
printf("%d\n", b);
}

//exercice 8
#include <stdio.h>
main(){
float x,y,z;
printf("Entrer la valeur de x");
scanf("%f", &x);
printf("Entrer la valeur de y");
scanf("%f", &y);
printf("Entrer la valeur de z");
scanf("%f", &z);
printf("La valeur de x est: %f\n", x);
printf("La valeur de y est: %f\n", y);
printf("La valeur de z est: %f\n", z);
printf("Le moyenne de x,y etz: %f", (x+y+z)/3);
}*/

//exercice 9
#include <stdio.h>
main(){
int nbr;
float prix;
printf("donner le prix d'article:");
scanf("%f", &prix);
printf("donner le nombre d'articles:");
scanf("%d", &nbr);
printf("Prix d'un article:%.2f", prix);
printf("\nNombre d'articles:%d", nbr);
printf("\nPrix total a payer:%.2f", prix*nbr);
}
