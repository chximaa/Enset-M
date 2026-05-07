//EXERCICE1
#include<stdio.h>
main(){
const nmax=50;
int n,ch,i,x,c;

do{
    printf("veuillez saisir taille de tableau : ");
    scanf("%d",&n);
    if (n>nmax){printf("\nle taille maximum est 50!!\n");}
    else if (n<1){printf("\nlongueur non valide\n");}
}while(n>nmax || n<1);

int t[n];
int min = t[0];
int max = t[0];
int j = n-1;
int ts[n];
for(i=0;i<n;i++){
    printf("Tableau[%d] = ",i+1);
    scanf("%d",&t[i]);}
ret:
    printf("\t\t\t======================================================\n");
    printf("\t\t\t|| 1 > Afficher le tableau et le nombre des element ||\n");
    printf("\t\t\t|| 2 > Inverse du tableau                           ||\n");
    printf("\t\t\t|| 3 > Afficher le valeur maximale                  ||\n");
    printf("\t\t\t|| 4 > Afficher le valeur minimale                  ||\n");
    printf("\t\t\t|| 5 > Recherche un element                         ||\n");
    printf("\t\t\t|| 6 > Afficher le nombre de d'occurrence           ||\n");
    printf("\t\t\t|| 7 > Quitter                                      ||\n");
    printf("\t\t\t======================================================\n");
printf("Saisir votre choix : ");
scanf("%d",&ch);

switch(ch){
        case 1 :
            printf("\naffichage de tableau\n");
            for(i=0;i<n;i++){
                printf(" %d |",t[i]);
            }
            printf("\nle nombre des elements dans tableau est : %d \n\n",n);
        break;

        case 2 :
            printf("\ntableau dans lordre normal\n");
            for(i=0;i<n;i++){
                printf(" %d |",t[i]);
            }
            printf("\ntableau inverse\n");
            for(i=0;i<n;i++){
                ts[j] = t[i];
                j--;
            }
            printf("\n\n");
            for(i=0;i<n;i++){
                printf(" %d |",ts[i]);
            }
        break;

        case 3 :
            printf("\naffichage de tableau\n");
            for(i=0;i<n;i++){
                if(max<t[i]){max = t[i];}
                    printf(" %d |",t[i]);
                }
            printf("\nle element max de tableau est : %d",max);
        break;

        case 4 :
            printf("\naffichage de tableau\n");
            for(i=0;i<n;i++){
                if(min>t[i]){min = t[i];}
                printf(" %d |",t[i]);
            }
            printf("\nle element min de tableau est : %d",min);
        break;

        case 5 :
            printf("\nsaisir un nombre : ");
            scanf("%d",&x);
            for(i=0;i<n;i++){
                if (t[i]==x){c = 1;break;}
                printf(" %d |",t[i]);
            }
            if(c==0){printf("\nl'element %d n'existe pas dans tableau\n",x);}
            else{printf("\nl'element %d trouve dans tableau",x);}
        break;

        case 6 :
            printf("saisir un nombre : ");
            scanf("%d",&x);
            for(i=0;i<n;i++){
                if (t[i]==x){c++;}
                printf(" %d |",t[i]);
            }
            if(c==0){printf("\nl'element %d n'existe pas dans tableau\n",x);}
            else{printf("\nl'element %d trouve dans tableau %d fois",x,c);}
        break;

        case 7 : break;
        default : printf("choix non valide redonne!!\n\n");
        goto ret;

        }
}

//EXERCICE 2
