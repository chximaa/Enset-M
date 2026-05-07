//exercice1
#include<stdio.h>
main(){
    int quantite;
    float prix, PU;
printf("donner la quantite d'article acheter");
scanf("%d",&quantite);
printf("donner le prix unitaire normale");
scanf("%f",&prix);
if (quantite>100){
    PU=0.6*prix;
}
else{
    PU=prix;
}
printf("le prix total est %.2f", PU*quantite);
}

//exercice2
#include<stdio.h>
main(){
    int a,b,c,d,max1, max2;
printf("donner le nbre1 : ");
scanf("%d", &a);
printf("donner le nbre2 : ");
scanf("%d", &b);
printf("donner le nbre3 : ");
scanf("%d", &c);
printf("donner le nbre4 : ");
scanf("%d", &d);
if(a<b){
    max1=b;
}
else{
    max1=a;
}
if (c<d){
    max2=d;
}
else{
    max2=c;
}
if(max1<max2){
    printf("le max est: %d", max2);
}
else{
    printf("le max est: %d", max1);
}
}

//exercice3
#include<stdio.h>
main(){
    int age,distance;
    float prix=0.35;
printf("donner la distance en km :");
scanf("%d", &distance);
printf("donner l'age du voyageur : ");
scanf("%d", &age);
if (distance>=100 && distance<300){
    prix=prix - 0.35*0.1;
}
else if (distance>300){
    prix=prix - 0.35*0.15;
}
else {
    prix=0.35;
}
if (age<18){
    prix=prix-0.35*0.25;
}
printf("le prix global est : %.2f", prix*distance);
}

//exercice 5
#include<stdio.h>
main(){


//partie1
int x,y,max,min;
printf("donner les deux nmbr :");
scanf("%d %d", &x,&y);
if (x>y){
    max=x;
    min=y;
}
else{
    max=y;
    min=x;
}
printf("le max est : %d\nle min est : %d",max, min);
}


//partie2
int x,y;
printf("donner les deux nmbr :");
scanf("%d %d", &x,&y);
if(x>y){
    printf("le max est : %d\nle min est : %d",x, y);
}
else{
    printf("le max est : %d\nle min est : %d",y, x);
}

//partie3
int x,y,max,min;
printf("donner les deux nmbr :");
scanf("%d %d", &x,&y);
max= (x>y) ?x:y;
min= (x<y) ?x:y;
printf("le max est : %d\nle min est : %d",max, min);

//partie4
int x,y;
printf("donner les deux nmbr :");
scanf("%d %d", &x,&y);
printf("le max est : %d\nle min est : %d",(x>y) ?x:y, (x<y) ?x:y);
}

//exercice6
#include<stdio.h>
main(){
float x,y,z;
printf("donner le 1er nmbr");
scanf("%f", &x);
printf("donner le 2eme nmbr");
scanf("%f", &y);
printf("donner le premier nmbr");
scanf("%f", &z);
if ((x>y && x<z) || (x<y && x>z)){
    printf(" le nombre %.2f est compris entre %.2f et %.2f", x,y,z);
}
else if ((y>x && y<z) || (y>z && y<x)){
    printf(" le nombre %.2f est compris entre %.2f et %.2f", y,x,z);
}
else{
    printf(" le nombre %.2f est compris entre %.2f et %.2f", z,y,x);
}
}

//exercice7
#include<stdio.h>
main(){
char x,y;
printf("donner une lettre");
scanf("%c",&x);
y= (x>='A' && x<='Z') ?x+32:x;
switch(y){
    case 'a':
    case 'e':
    case 'u':
    case 'i':
    case 'o':
    case 'y':
            printf("%C est une voyelle", x);
            break;
    default:
      printf("%C est une consonne", x);
}
}

