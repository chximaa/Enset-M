const productsData = [
   { name: "Smartphone", category: "electronics", price: 800 },
   { name: "T-shirt", category: "clothing", price: 25 },
   { name: "Harry Potter", category: "books", price: 15 },
   { name: "Ordinateur portable", category: "electronics", price: 1200 },
   { name: "Jeans", category: "clothing", price: 60 },
   { name: "Le Seigneur des Anneaux", category: "books", price: 20 }
];

const categoryFilter = document.getElementById("categoryFilter");
const productsDiv = document.getElementById("products");

function displayProducts(products) {
   productsDiv.innerHTML = ""; // Efface le contenu précédent

   products.forEach(product => {
       const productDiv = document.createElement("div");
       productDiv.innerHTML = `<p>Nom: ${product.name}</p><p>Catégorie: ${product.category}</p><p>Prix: ${product.price}</p>`;
       productsDiv.appendChild(productDiv);
   });
}

displayProducts(productsData); // Affiche tous les produits au chargement

categoryFilter.addEventListener("change", () => {
   const selectedCategory = categoryFilter.value;

   let filteredProducts;
   if (selectedCategory === "all") {
       filteredProducts = productsData;
   } else {
       filteredProducts = productsData.filter(product => product.category === selectedCategory);
   }

   displayProducts(filteredProducts);
});



//ma methode
// const divProducts=document.getElementById("products")
// function displayProducts(products){
//    products.forEach(element => {
//             p=document.createElement("p")
//             p.textContent=`Nom : ${element.name}, Catégorie : ${element.category}, Prix : ${element.price}`
//             divProducts.appendChild(p)
//    });
// }

// displayProducts(productsData)
// document.getElementById("categoryFilter").addEventListener("change",filtrer)
// function filtrer(){
//    document.getElementById("products").textContent=""
//    categorySelectionnee=document.getElementById("categoryFilter").value 
//    produitsParCategorie=productsData.filter(function (produit) {
//          return produit.category===categorySelectionnee
//    })
//    if (categorySelectionnee==="all")
//       displayProducts(productsData)
//    else 
//       displayProducts(produitsParCategorie)
// }