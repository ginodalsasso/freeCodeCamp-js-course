
//initialisation d'une variable globale myLeads pour stocker les liens
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn= document.getElementById("input-btn")
const ulEL = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
// Récupération des données sauvegardées dans le localStorage et mise à jour de myLeads si elles existent
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads) //Appel de la fonction render pour afficher les liens
}
// récupère l'URL de l'onglet actif et l'ajoute à myLeads
tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})

// afficher les liens dans la liste
function render(leads){
    let listItems = ""
    for(let i = 0; i < leads.length; i++){
        listItems +=//${ma variable} est un autre moyen d'echaper une variable sans +
         `
        <li>
            <a target='_blank' href= '${leads[i]}' > 
                ${leads[i]} 
            </a>
        </li>
        `
    }
    
    ulEL.innerHTML = listItems
}
// supprime les données sauvegardées et réinitialise myLeads
deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear() // Effacement de toutes les données du localStorage
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function(){
    //.value recupère la donnée inscrit dans l'input
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads) // Sauvegarde de myLeads dans le localStorage
})


