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
alert(`You have chosen ${playerSelection}.`);


// get a random input from computer and save it into a function

let signArray = [ "rock" , "paper" , "scissors" ];
let randomSign = Math.floor(Math.random() * 3);
let computerSelection = signArray[randomSign];
alert(computerSelection);


// compare two function and decide the winner
