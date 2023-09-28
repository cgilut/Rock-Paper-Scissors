"use strict"

// get input from the user and save it into a function
let playerSelection = prompt("Rock, paper or scissors?");
    playerSelection = playerSelection.toLowerCase()
        while (
            playerSelection != "rock" &&
            playerSelection != "paper" &&
            playerSelection != "scissors"
        ) {
            playerSelection = prompt("Rock, paper or scissors?!");
            playerSelection = playerSelection.toLowerCase()
        }
// alert(`You have chosen ${playerSelection}.`);


// get a random input from computer and save it into a function

let signArray = [ "rock" , "paper" , "scissors" ];
let randomSign = Math.floor(Math.random() * 3);
let computerSelection = signArray[randomSign];
alert(computerSelection);


// compare two function and decide the winner

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
// } else if (
//     (playerSelection == "rock" && computerSelection == "paper") ||
//     (playerSelection == "paper" && computerSelection == "scissors") ||
//     (playerSelection == "scissors" && computerSelection == "rock")
} else 
 {
    alert("You lose!");
}