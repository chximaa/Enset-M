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

/*
   1. Écrivez une fonction createTaskTable(div,tasks) qui génère un tableau HTML (<table>) 
      à partir des données de tasks.
   2. Le tableau doit avoir un en-tête (<thead>) avec les colonnes : "Tâche", "Date d'échéance" et "Statut"
   3. Dans le corps du tableau (<tbody>), chaque ligne doit correspondre à une tâche avec :
      - Une cellule pour le nom de la tâche
      - Une cellule pour la date d'échéance (formatée en "JJ/MM/AAAA")
      - Une cellule pour le statut avec un indicateur visuel :
        * "pending" : texte en orange
        * "in-progress" : texte en bleu
        * "completed" : texte en vert
   4. Ajoutez le tableau créé à l'élément container*/


div="div"
function createTaskTable(div, tasks) {
    div = document.querySelector("div");
    table = document.createElement("table");

    tr = document.createElement("tr");

    td = document.createElement("td");
    td.textContent = "Tâche";
    tr.appendChild(td);

    td = document.createElement("td");
    td.textContent = "Date d'échéance";
    tr.appendChild(td);

    td = document.createElement("td");
    td.textContent = "Statut";
    tr.appendChild(td);

    table.appendChild(tr);

    tasks.map(task => {
        tr = document.createElement("tr");

        td = document.createElement("td");
        td.textContent = task.name;
        tr.appendChild(td);

        td = document.createElement("td");
        td.textContent = task.dueDate.split("-").reverse().join("/");
        tr.appendChild(td);

        td = document.createElement("td");
        td.textContent = task.status;

        if (task.status == "pending")
            td.style.color = "orange";
        if (task.status == "in-progress")
            td.style.color = "blue";
        if (task.status == "completed")
            td.style.color = "green";

        tr.appendChild(td);

        // Ajoute la ligne au tableau
        table.appendChild(tr);
    });

    // Ajoute une bordure au tableau
    table.style.border = "1px solid black";
    table.style.cellspacing = 12;

    // Ajoute le tableau à l'élément <div>
    div.appendChild(table);
}
createTaskTable(div,tasks)

/*function createTaskTable(container, tasks) {
    // Création du tableau
    const table = document.createElement("table");
    table.border = "1";
    
    // Création de l'en-tête
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    ["Tâche", "Date d'échéance", "Statut"].forEach(text => {
        const th = document.createElement("th");
        th.textContent = text;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    // Création du corps du tableau
    const tbody = document.createElement("tbody");
    tasks.forEach(task => {
        const row = document.createElement("tr");
        
        // Colonne Tâche
        const nameCell = document.createElement("td");
        nameCell.textContent = task.name;
        row.appendChild(nameCell);
        
        // Colonne Date d'échéance
        const dateCell = document.createElement("td");
        const date = new Date(task.dueDate);
        dateCell.textContent = date.toLocaleDateString("fr-FR");
        row.appendChild(dateCell);
        
        // Colonne Statut
        const statusCell = document.createElement("td");
        statusCell.textContent = task.status;
        
        // Ajout des couleurs selon le statut
        switch (task.status) {
            case "pending":
                statusCell.style.color = "orange";
                break;
            case "in-progress":
                statusCell.style.color = "blue";
                break;
            case "completed":
                statusCell.style.color = "green";
                break;
        }
        
        row.appendChild(statusCell);
        tbody.appendChild(row);
    });
    
    table.appendChild(tbody);
    
    // Ajout du tableau au container
    container.appendChild(table);
}

// Sélection du conteneur et appel de la fonction
const container = document.querySelector("div");
createTaskTable(container, tasks);*/





//    function createTaskTable(container, tasks) {
//     // Création du tableau
//     let table = document.createElement("table");
//     table.border = "1";
    
//     // Création de l'en-tête
//     let thead = document.createElement("thead");
//     let headerRow = document.createElement("tr");
//     ["Tâche", "Date d'échéance", "Statut"].forEach(text => {
//         let th = document.createElement("th");
//         th.textContent = text;
//         headerRow.appendChild(th);
//     });
//     thead.appendChild(headerRow);
//     table.appendChild(thead);
    
//     // Création du corps du tableau
//     let tbody = document.createElement("tbody");
//     tasks.forEach(task => {
//         let row = document.createElement("tr");
        
//         // Cellule pour le nom de la tâche
//         let nameCell = document.createElement("td");
//         nameCell.textContent = task.name;
//         row.appendChild(nameCell);
        
//         // Cellule pour la date formatée
//         let dateCell = document.createElement("td");
//         let date = new Date(task.dueDate);
//         dateCell.textContent = date.toLocaleDateString("fr-FR");
//         row.appendChild(dateCell);
        
//         // Cellule pour le statut avec couleur
//         let statusCell = document.createElement("td");
//         statusCell.textContent = task.status;
//         statusCell.style.color = task.status === "pending" ? "orange" :
//                                  task.status === "in-progress" ? "blue" :
//                                  task.status === "completed" ? "green" : "black";
//         row.appendChild(statusCell);
        
//         tbody.appendChild(row);
//     });
    
//     table.appendChild(tbody);
//     container.appendChild(table);
// }
// document.addEventListener("DOMContentLoaded", () => {
//     let container = document.querySelector("div");
//     createTaskTable(container, tasks);
// });