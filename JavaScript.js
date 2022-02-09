/* Rock paper scissors notes*/

let pickOptions = ['Rock','Paper','Scissors'];
let computerPlayPick = "";
let playerSelection = prompt("Rock, Paper, or Scissors?", '');


//generate random computer pick from rock paper scissors.
function computerPlay () {
    computerPlayPick = pickOptions[Math.floor(Math.random()*pickOptions.length)];
    return computerPlayPick
}

computerPlay()

//convert player input to lower case
playerSelection = playerSelection.toLowerCase()
computerPlayPick = computerPlayPick.toLowerCase()

function playRound (playerSelectionPlay, computerPlayPickPlay) {
    playerSelectionPlay=playerSelection
    computerPlayPickPlay=computerPlayPick
    if (playerSelectionPlay === "rock") {
        if (computerPlayPickPlay === "rock"){
            return "Draw!"
            } else if (computerPlayPickPlay === "paper"){
                return "Rock beats Paper!"
            } else if (computerPlayPickPlay === "scissors") {
                return "Rock beats Scissors!"
            } else {
                return "Something went wrong"
        }
    } else if (playerSelectionPlay === "paper"){
        if (computerPlayPickPlay === "rock"){
            return "Paper wins!"
        } else if (computerPlayPickPlay === "paper"){
            return "Draw!"
        } else if (computerPlayPickPlay === "scissors"){
            return "Scissors win!"
        } else {
            return "Something went wrong again"
        }
    } else if (playerSelectionPlay === "scissors") {
        if (computerPlayPickPlay === "rock"){
            return "Rock wins!"
        } else if (computerPlayPickPlay === "paper"){
            return "Scissors win!"
        } else if (computerPlayPickPlay === "scissors"){
            return "Draw"
        } else {
            return "Some went really wrong!"
        }
    } else {
        return playerSelectionPlay+" is not a valid move."
    }
}

console.log(computerPlayPick);
playRound()