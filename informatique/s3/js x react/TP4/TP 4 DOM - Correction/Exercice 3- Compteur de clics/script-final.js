// Variable compteur
let compteur = 0;

// Fonction pour incrémenter le compteur
function incrementerCompteur() {
    compteur = compteur + 1; // On peut aussi écrire: compteur++;
    
    // Mettre à jour l'affichage
    const spanCompteur = document.getElementById("compteur");
    spanCompteur.textContent = compteur;
}

// Fonction pour réinitialiser le compteur
function reinitialiserCompteur() {
    compteur = 0;
    
    // Mettre à jour l'affichage
    const spanCompteur = document.getElementById("compteur");
    spanCompteur.textContent = compteur;
}

// Ajouter les écouteurs d'événements
document.getElementById("boutonClick").addEventListener("click", incrementerCompteur);
document.getElementById("boutonReset").addEventListener("click", reinitialiserCompteur);

