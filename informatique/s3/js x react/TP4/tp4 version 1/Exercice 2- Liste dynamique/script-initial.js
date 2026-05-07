// Tableau de fruits
const fruits = ["Pomme", "Banane", "Orange", "Fraise", "Kiwi"];


//1. Écrivez une fonction afficherFruits() qui prend le tableau fruits et crée un élément <li> pour chaque fruit
//2. Ajoutez chaque élément <li> à la liste <ul> avec l'id "listeFruits"
function afficherFruits() {
      // Sélection de la liste <ul>
    const liste = document.getElementById("listeFruits");
      
      //Ajout des fruits dans la liste
        fruits.map(fruit => {2
        const li = document.createElement("li"); // Création d'un élément <li>
        li.textContent = fruit; // Ajout du texte du fruit
        liste.appendChild(li); // Ajout de l'élément à la liste
        });
}

    


//3. Appelez la fonction pour afficher les fruits quand la page se charge
afficherFruits();

//       fruits.forEach(fruit => {
//           const li = document.createElement("li"); // Création d'un élément <li>
//           li.textContent = fruit; // Ajout du texte du fruit
//           liste.appendChild(li); // Ajout de l'élément à la liste
//       });
//   }
  



// for(let i=0; i<fruits.length; i++){
//         const li = document.createElement("li");
//         li.textContent = fruits[i];
//         liste.appendChild(li); 
// }






















//document.addEventListener("DOMContentLoaded", afficherFruits);
