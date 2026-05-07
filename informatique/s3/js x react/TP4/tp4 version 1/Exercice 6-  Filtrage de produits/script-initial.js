const productsData = [
   { name: "Smartphone", category: "electronics", price: 800 },
   { name: "T-shirt", category: "clothing", price: 25 },
   { name: "Harry Potter", category: "books", price: 15 },
   { name: "Ordinateur portable", category: "electronics", price: 1200 },
   { name: "Jeans", category: "clothing", price: 60 },
   { name: "Le Seigneur des Anneaux", category: "books", price: 20 }
];

/*
   1. Sélectionnez l'élément select avec l'ID "categoryFilter" et la div avec l'ID "products".
   2. Créez une fonction `displayProducts(products)` qui prend un tableau de produits en argument et affiche les produits dans la div "products".
   3. Appelez `displayProducts` avec `productsData` pour afficher tous les produits au chargement de la page.
   4. Ajoutez un écouteur d'événement "change" au select "categoryFilter".
   5. Dans la fonction de l'écouteur :
       * Récupérez la valeur sélectionnée du select.
       * Filtrez le tableau `productsData` pour ne garder que les produits de la catégorie sélectionnée (ou tous les produits si la valeur est "all").
       * Appelez `displayProducts` avec le tableau filtré.
*/