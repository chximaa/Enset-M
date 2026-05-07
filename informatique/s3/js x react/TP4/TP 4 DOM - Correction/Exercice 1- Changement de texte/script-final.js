// Fonction qui change le texte du titre
function changerTitre() {
    const titre = document.getElementById("titre");
    titre.textContent = "Nouveau titre";
}

// Ajouter un écouteur d'événement au bouton
const bouton = document.getElementById("boutonChanger");
bouton.addEventListener("click", changerTitre);

// bouton.addEventListener("click", changerTitre())
// bouton.addEventListener("click", changerTitre)
// La différence entre ces deux lignes de code est cruciale et concerne la manière dont les fonctions sont appelées et passées comme gestionnaires d'événements :
// bouton.addEventListener("click", changerTitre())
// changerTitre() est appelée immédiatement : Les parenthèses () après changerTitre indiquent que vous êtes en train d'appeler la fonction changerTitre immédiatement lorsque cette ligne de code est exécutée.
// Le résultat de l'appel de changerTitre() est passé comme gestionnaire d'événements : addEventListener ne reçoit pas la fonction changerTitre elle-même. Il reçoit la valeur de retour de changerTitre(). Si changerTitre() ne renvoie rien (c'est-à-dire, elle a un return; implicite ou explicite sans valeur), alors addEventListener recevra undefined comme gestionnaire d'événements. Dans ce cas, rien ne se passera lorsque vous cliquerez sur le bouton (ou, plus précisément, undefined sera "appelé" lorsque vous cliquerez, ce qui n'a aucun effet). Si changerTitre() renvoie une autre fonction, c'est cette autre fonction qui sera utilisée comme gestionnaire d'événement.

// bouton.addEventListener("click", changerTitre)
// changerTitre est passée comme référence à une fonction : Ici, vous passez simplement le nom de la fonction changerTitre (sans les parenthèses). Cela signifie que vous passez une référence à la fonction changerTitre elle-même, et non pas le résultat de son exécution.
// addEventListener appellera changerTitre lorsque l'événement se produit : addEventListener sait maintenant que changerTitre est une fonction que vous voulez exécuter lorsque l'événement "click" se produit sur l'élément bouton. Le navigateur appellera automatiquement changerTitre chaque fois que le bouton sera cliqué. De plus, addEventListener s'assurera généralement que la fonction changerTitre est appelée avec le bon contexte (this) et avec l'objet event contenant des informations sur l'événement.