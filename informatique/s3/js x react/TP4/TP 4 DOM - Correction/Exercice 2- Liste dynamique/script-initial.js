// Tableau de fruits
const fruits = ["Pomme", "Banane", "Orange", "Fraise", "Kiwi"];

/*
1. Écrivez une fonction afficherFruits() qui prend le tableau fruits et 
   crée un élément <li> pour chaque fruit
   
2. Ajoutez chaque élément <li> à la liste <ul> avec l'id "listeFruits"

3. Appelez la fonction pour afficher les fruits quand la page se charge
*/

function afficherFruits(){
   ul=document.getElementById("listeFruits")
   listeFruits=fruits.forEach(fruit=>{
         li=document.createElement("li")
         li.textContent=fruit
         ul.appendChild(li)
         return fruit
   })
   console.log(listeFruits)
}
afficherFruits()