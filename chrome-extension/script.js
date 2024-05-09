
let myLeads = [1, 2, 3]
const inputEl = document.getElementById("input-el")
const inputBtn= document.getElementById("input-btn")

const ulEL = document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){
    //.value recupère la donnée inscrit dans l'input
    myLeads.push(inputEl.value)
    renderLeads()
})

function renderLeads(){
    let listItems = ""
    for(let i = 0; i < myLeads.length; i++){
        listItems += "<li>" + myLeads[i] + "</li>"
    }
    
    ulEL.innerHTML = listItems
}
