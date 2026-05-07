// Tableau de fruits
const fruits = ["Pomme", "Banane", "Orange", "Fraise", "Kiwi"];

// Fonction pour afficher les fruits
function afficherFruits() {
    const liste = document.getElementById("listeFruits");
    
    for (let i = 0; i < fruits.length; i++) {
        // Créer un élément li
        const li = document.createElement("li");
        // Définir son contenu
        li.textContent = fruits[i];
        // Ajouter à la liste
        liste.appendChild(li);
    }
}

// Appeler la fonction pour afficher les fruits
afficherFruits();

// une autres methode
// function afficherFruits(){
//     ul=document.getElementById("listeFruits")
//     fruits.map(fruit=>{      // ou fruits.forEach(fruit=>{
//        li=document.createElement("li")
//        li.textContent=fruit
//        ul.appendChild(li)      
//     })
 
//  }
//  afficherFruits()