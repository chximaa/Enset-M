#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX 100

typedef struct {
    char elements[MAX];
    int sommet;
} Pile;

void Init_Pile(Pile *P) { // P est un pointeur vers une structure de type Pile
    P->sommet = -1;
}

int Pile_Vide(Pile P) {    // instance de la pile // modifications apportées à cette copie n'affectent pas la structure originale,
    return (P.sommet == -1);    //retourne une valeur (un indicateur) permettant de savoir si la pile est vide ou non
}

void Empiler(Pile *P, char val) {
    if (P->sommet < MAX - 1) {
        P->sommet++;
        P->elements[P->sommet] = val;
    }
}

char Depiler(Pile *P) {
    if (!Pile_Vide(*P)) {
        return P->elements[P->sommet--];
    }
   return '\0'; //Si la pile est vide (le if précédent n'est pas satisfait), cette ligne est exécutée.'\0' : Retourne le caractère nul ('\0'), qui indique que l'opération de dépilement n'a pas réussi car il n'y avait aucun élément à retirer.
}

int Verification_Parentheses(const char *expression) { // pour savoir si les parenthese, les accolades ou les crochets sont equilibrer ou non dans une expression
    Pile P;
    Init_Pile(&P);

    for (int i = 0; i < strlen(expression); i++) { // Une boucle for parcourt chaque caractère de la chaîne expression.
        char c = expression[i];
        if (c == '(' || c == '{' || c == '[') {
            Empiler(&P, c);
        } else if (c == ')' || c == '}' || c == ']') {
            if (Pile_Vide(P)) return 0; // erreur car on a une par fermer sans la parenthese ouverte
            char sommet = Depiler(&P);
            if ((c == ')' && sommet != '(') ||
                (c == '}' && sommet != '{') ||
                (c == ']' && sommet != '[')) {
                return 0;
            }
        }
    }
    return Pile_Vide(P);
}

int main() {
    char expression[MAX];
    printf("Entrez une expression : ");
    scanf("%s", expression);

    if (Verification_Parentheses(expression)) {
        printf("Expression correcte\n");
    } else {
        printf("Erreur de parenthésation\n");
    }

    return 0;
}
