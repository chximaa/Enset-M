
//1. Écrivez une fonction changerTitre() qui change le texte du h1 avec l'id "titre" pour "Nouveau titre"
   
   function changerTitre() {
    document.getElementById("titre").innerText = "Nouveau titre";
}

//2. Ajoutez un écouteur d'événement au bouton avec l'id "boutonChanger" pour que quand on clique dessus, la fonction changerTitre() soit appelée
document.getElementById("boutonChanger").addEventListener("click", changerTitre);