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

// compare two function and decide the winner

function playRound() {
    let playerSelection = getPlayerSelection()
    let computerSelection = getComputerSelection()
        console.log(playerSelection, computerSelection)
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
        alert("You win the round!");
        return "Player";
    } else {
        alert("You lose the round!");
        return "Computer";
    }
}

function game() {
    let playerCounter = 0
    let computerCounter = 0
    let i = 0
// play until 5 rounds are played and count # of wins by player and computer
    for (i = 0; i < 5; i++) {
        let roundOutcome = playRound();
            if (roundOutcome == "Computer") {
                computerCounter = computerCounter + 1
                console.log(computerCounter)
            }
            else if (roundOutcome == "Player") {
                playerCounter = playerCounter + 1
                console.log(playerCounter)
            }
    }
// determine the winner 
    if (playerCounter > computerCounter) {
        alert("You win the game!")
    } else if (computerCounter > playerCounter) {
        alert("You lose the game!")
    } else {
        alert("It's a draw!")
    }
}

game()