"use strict"

const btnSigns = document.querySelectorAll('.wrapper__button-sign')
const yourSignDiv = document.querySelector('.wrapper__your-sign')
const compSignDiv = document.querySelector('.wrapper__opponent-sign')

function whenButtonClicked() {

    let playerSelection = this.id;
    let computerSelection = getComputerSelection();

    function getComputerSelection() {
        let signArray = [ "rock" , "paper" , "scissors" ];
        // math.random gives a number from 0 to 1, excluding 1
        // then we multiply it by 3 and round down,
        // that way we get either 0, 1 or 2, which corresponds
        // to the objects in array
        let randomSign = Math.floor(Math.random() * 3);
        let computerSign = signArray[randomSign];
        return computerSign;
    }

    yourSignDiv.innerHTML = `<img src="assets/hand-${playerSelection}.png" 
        alt="Your Sign" class = "wrapper__img-${playerSelection}">`;
    yourSignDiv.classList.add('your-choice');

    compSignDiv.innerHTML = `<img src="assets/hand-${computerSelection}.png" 
        alt="Opponent's Sign" class = "wrapper__img-${computerSelection}">`;
    compSignDiv.classList.add('comp-choice')

        

}

btnSigns.forEach(button => {
    button.addEventListener('click', whenButtonClicked);
});

