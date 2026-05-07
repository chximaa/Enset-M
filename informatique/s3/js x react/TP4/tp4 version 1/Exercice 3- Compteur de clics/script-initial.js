//1. Créez une variable compteur initialisée à 0
compteur = 0;

// 2. Écrivez une fonction incrementerCompteur() qui:
//    - Augmente la valeur du compteur de 1
//    - Met à jour le texte du span avec l'id "compteur" pour afficher la nouvelle valeur

function incrementerCompteur() {
      compteur++;
      document.getElementById("compteur").textContent = compteur;
}

// 3. Écrivez une fonction reinitialiserCompteur() qui:
//    - Remet la valeur du compteur à 0
//    - Met à jour le texte du span avec l'id "compteur"

function reinitialiserCompteur() {
      compteur = 0;
      document.getElementById("compteur").textContent = compteur;
}


function decrementerCompteur(){
      compteur--;
      document.getElementById("compteur").textContent = compteur;

}
// 4. Ajoutez un écouteur d'événement au bouton "boutonClick" pour appeler incrementerCompteur()
//    quand on clique dessus

document.getElementById("boutonClick").addEventListener("click", incrementerCompteur);

// 5. Ajoutez un écouteur d'événement au bouton "boutonReset" pour appeler reinitialiserCompteur()
//    quand on clique dessus

document.getElementById("boutonReset").addEventListener("click", reinitialiserCompteur);

document.getElementById("decrementer").addEventListener("click", decrementerCompteur);