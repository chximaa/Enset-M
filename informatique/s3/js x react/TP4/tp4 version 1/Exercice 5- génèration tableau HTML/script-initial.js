const tasks = [
   {
       name: "Finir le rapport",
       dueDate: "2023-06-15",
       status: "pending"
   },
   {
       name: "Réunion clients",
       dueDate: "2023-06-10",
       status: "completed"
   },
   {
       name: "Préparer présentation",
       dueDate: "2023-06-20",
       status: "in-progress"
   },
   {
       name: "Appeler fournisseur",
       dueDate: "2023-06-05",
       status: "pending"
   },
   {
       name: "Réviser budget",
       dueDate: "2023-06-12",
       status: "completed"
   }
];


   // 1. Écrivez une fonction createTaskTable(div,tasks) qui génère un tableau HTML (<table>) 
   //    à partir des données de tasks.


   // 2. Le tableau doit avoir un en-tête (<thead>) avec les colonnes : "Tâche", "Date d'échéance" et "Statut"


   // 3. Dans le corps du tableau (<tbody>), chaque ligne doit correspondre à une tâche avec :
   //    - Une cellule pour le nom de la tâche
   //    - Une cellule pour la date d'échéance (formatée en "JJ/MM/AAAA")
   //    - Une cellule pour le statut avec un indicateur visuel :
   //      * "pending" : texte en orange
   //      * "in-progress" : texte en bleu
   //      * "completed" : texte en vert



   
   // 4. Ajoutez le tableau créé à l'élément container

div="div"
function createTaskTable(div, tasks) {
    // Sélectionne le premier élément <div> du document
    div = document.querySelector("div");

    // Crée un élément <table>
    table = document.createElement("table");

    // Crée une ligne <tr> pour l'en-tête du tableau
    tr = document.createElement("tr");

    // Crée une cellule <td> pour l'en-tête "Tâche"
    td = document.createElement("td");
    td.textContent = "Tâche";
    tr.appendChild(td);

    // Crée une cellule <td> pour l'en-tête "Date d'échéance"
    td = document.createElement("td");
    td.textContent = "Date d'échéance";
    tr.appendChild(td);

    // Crée une cellule <td> pour l'en-tête "Statut"
    td = document.createElement("td");
    td.textContent = "Statut";
    tr.appendChild(td);

    // Ajoute la ligne d'en-tête au tableau
    table.appendChild(tr);

    // Parcourt chaque tâche dans le tableau tasks
    tasks.map(task => {
        // Crée une nouvelle ligne <tr> pour chaque tâche
        tr = document.createElement("tr");

        // Crée une cellule <td> pour le nom de la tâche
        td = document.createElement("td");
        td.textContent = task.name;
        tr.appendChild(td);

        // Crée une cellule <td> pour la date d'échéance, formatée en "JJ/MM/AAAA"
        td = document.createElement("td");
        td.textContent = task.dueDate.split("-").reverse().join("/");
        tr.appendChild(td);

        // Crée une cellule <td> pour le statut de la tâche
        td = document.createElement("td");
        td.textContent = task.status;

        // Change la couleur du texte en fonction du statut de la tâche
        if (task.status == "pending")
            td.style.color = "orange";
        if (task.status == "in-progress")
            td.style.color = "blue";
        if (task.status == "completed")
            td.style.color = "green";

        // Ajoute la cellule de statut à la ligne
        tr.appendChild(td);

        // Ajoute la ligne au tableau
        table.appendChild(tr);
    });

    // Ajoute une bordure au tableau
    table.style.border = "1px solid black";

    // Ajoute le tableau à l'élément <div>
    div.appendChild(table);
}
createTaskTable(div,tasks)

table= document.createElement("table");
tr=document.createElement("tr");
td = document.createElement("td");
td.textContent = "Produits";
tr.appendChild(td);
td = document.createElement("td");
td.textContent = "Prix";
tr.appendChild(td);
const   productElement = document.createElement("div");
tr=document.createElement("tr");
td = document.createElement("td");
td.textContent = `${product.name}`;
tr.appendChild(td);
td = document.createElement("td");
td.textContent = `${product.price}€`;
tr.appendChild(td);
table.appendChild(tr)