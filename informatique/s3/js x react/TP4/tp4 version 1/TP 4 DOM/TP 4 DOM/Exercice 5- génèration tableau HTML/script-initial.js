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
   4. Ajoutez le tableau créé à l'élément container
*/
div="div"
function createTaskTable(div,tasks){
   div=document.querySelector("div")
   table=document.createElement("table")
   tr=document.createElement("tr")

   td=document.createElement("td")
   td.textContent="Tâche"
   tr.appendChild(td)


   td=document.createElement("td")
   td.textContent="Date d'échéance"
   tr.appendChild(td)

   td=document.createElement("td")
   td.textContent="Statut"
   tr.appendChild(td)

   table.appendChild(tr)


   
   tasks.map(task=>{
      tr=document.createElement("tr")
      td=document.createElement("td")
      td.textContent=task.name
      tr.appendChild(td)
      td=document.createElement("td")
      td.textContent=task.dueDate.split("-").reverse().join("/")
      tr.appendChild(td)
      td=document.createElement("td")
      td.textContent=task.status
      if (task.status=="pending")
         td.style.color="orange"
      if (task.status=="in-progress")
         td.style.color="blue"
      if (task.status=="completed")
         td.style.color="green"
      tr.appendChild(td)   
      table.appendChild(tr)  
   })
   table.style.border="1px solid black"
   div.appendChild(table)
}
createTaskTable(div,tasks)