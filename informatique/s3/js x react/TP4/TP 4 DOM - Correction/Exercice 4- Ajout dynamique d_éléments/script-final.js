// Fonction pour ajouter une tâche
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

