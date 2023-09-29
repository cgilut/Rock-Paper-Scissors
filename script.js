"use strict"

// get input from the user and save it into a function

function getPlayerSelection () {
    let playerSign = prompt("Rock, paper or scissors?");
        playerSign = playerSign.toLowerCase()
            while (
                playerSign != "rock" &&
                playerSign != "paper" &&
                playerSign != "scissors"
            ) {
                playerSign = prompt("Rock, paper or scissors?!");
                playerSign = playerSign.toLowerCase()
            }
            return playerSign;
}


// get a random input from computer and save it into a function

function getComputerSelection() {
    let signArray = [ "rock" , "paper" , "scissors" ];
    let randomSign = Math.floor(Math.random() * 3);
    let computerSign = signArray[randomSign];
    return computerSign;
}

let playerSelection = getPlayerSelection()
let computerSelection = getComputerSelection()
console.log(playerSelection, computerSelection)

// compare two function and decide the winner

function playRound() {
    if (
        (playerSelection == "rock" && computerSelection == "rock") ||
        (playerSelection == "paper" && computerSelection == "paper") ||
        (playerSelection == "scissors" && computerSelection == "scissors")
    ) {
        alert("Draw!");
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        alert("You win!");
    } else {
        alert("You lose!");
    }
}

playRound()