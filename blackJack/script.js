
let player = {
    name: "Gino",
    chips: 10
}

let cards = [] // Tableau pour stocker les cartes du joueur
let sum = 0 // Somme des valeurs des cartes du joueur
let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector("#sum-el")

let hasBlackjack = false
let isAlive = false

let message = " "
let messageEl = document.getElementById("message-el")
// console.log(messageEl)

let cardsEl = document.getElementById("cards-el")

let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    //Math.floor enlève les décimales, Math.random génère un chiffre entre 0 et 1 (1 exclus) (0.00000 -> 0.99999)
    let random = Math.floor( Math.random() * 13) +1
    if(random > 10){
        return 10
    } else if(random === 1){
        return 11
    } else{
        return random
    }
}

function startGame(){
    // Met à jour l'état du jeu
    isAlive = true
    // Tire deux cartes aléatoires pour le joueur
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    // Affiche les cartes du joueur
    cardsEl.textContent = "Cards: "
    //pour i = la position dans le tableau cards, i < que la longueur du [] cards, itère de 1
    for(let i = 0; i < cards.length ; i++ ){
        // affiche le tableau (initialisé à i) + "Cards: "
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want a new card ?"
    } else if (sum === 21){
        message = "Wohooo ! You've got the blackjack !"
        hasBlackjack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if(isAlive === true && hasBlackjack === false){
        let card = getRandomCard()
        sum += card
        //ajoute la variabla card au tableau cards
        cards.push(card)
         // Met à jour l'affichage du jeu
        renderGame()
    }
}