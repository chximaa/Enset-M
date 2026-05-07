/*
1. Écrivez une fonction ajouterTache() qui:
   - Récupère la valeur du champ input avec l'id "nouvelleTache"
   - Crée un nouvel élément <li> avec cette valeur comme texte
   - Ajoute ce <li> à la liste <ul> avec l'id "listeTaches"
   - Vide le champ input après l'ajout
   - N'ajoute pas de tâche si le champ input est vide

2. Ajoutez un écouteur d'événement au bouton avec l'id "boutonAjouter" pour 
   appeler ajouterTache() quand on clique dessus
*/

function ajouterTache(){
   nouvelleTache=document.getElementById("nouvelleTache").value.trim() 
   if (nouvelleTache!=""){
      li=document.createElement("li")
      li.textContent=nouvelleTache
      ul=document.getElementById("listeTaches")
      ul.appendChild(li)
      document.getElementById("nouvelleTache").value=""
   }
}
document.getElementById("boutonAjouter").addEventListener("click",ajouterTache)