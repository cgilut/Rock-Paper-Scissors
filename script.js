"use strict"

const btnSigns = document.querySelectorAll('.wrapper__button-sign')
const yourSignDiv = document.querySelector('.wrapper__your-sign')
const compSignDiv = document.querySelector('.wrapper__computer-sign')
const roundOutcomeText = document.querySelector('.wrapper__outcome')
const yourScore = document.querySelector('.wrapper__your-score')
const compScore = document.querySelector('.wrapper__computer-score')
const endOfGamePopup = document.querySelector('.endOfGamePopup')
const gameOutcomeText = document.querySelector('.endOfGamePopup__inner-text')
const closeButton = document.querySelector('#endOfGamePopup__closeButton')
let playerCounter = 0;
let computerCounter = 0;

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

    yourSignDiv.classList.remove('won', 'lost');
    compSignDiv.classList.remove('won', 'lost');

    yourSignDiv.innerHTML = `<img src="assets/hand-${playerSelection}.png" 
        alt="Your Sign" class = "wrapper__img-${playerSelection}">`;
    yourSignDiv.classList.add('your-choice');

    compSignDiv.innerHTML = `<img src="assets/hand-${computerSelection}.png" 
        alt="Computer's Sign" class = "wrapper__img-${computerSelection}">`;
    compSignDiv.classList.add('comp-choice')

    function playRound() {

        if (
            (playerSelection == "rock" && computerSelection == "rock") ||
            (playerSelection == "paper" && computerSelection == "paper") ||
            (playerSelection == "scissors" && computerSelection == "scissors")
        ) {
            roundOutcomeText.textContent = 
                `${playerSelection.charAt(0).toUpperCase()}${playerSelection.slice(1)}
                against ${computerSelection}, its a draw!`;
        } else if (
            (playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "paper" && computerSelection == "rock") ||
            (playerSelection == "scissors" && computerSelection == "paper")
        ) {
            roundOutcomeText.textContent = 
                `${playerSelection.charAt(0).toUpperCase()}${playerSelection.slice(1)}
                beats ${computerSelection}, you win the round!`;
            yourSignDiv.classList.add('won');
            compSignDiv.classList.add('lost');
            playerCounter++;
            yourScore.textContent = `You: ${playerCounter}`;
        } else {
            roundOutcomeText.textContent = 
                `${computerSelection.charAt(0).toUpperCase()}${computerSelection.slice(1)} 
                beats ${playerSelection}, you lose the round!`;
            yourSignDiv.classList.add('lost');
            compSignDiv.classList.add('won');
            computerCounter++;
            compScore.textContent = `Computer: ${computerCounter}`;
        }

        if (playerCounter === 3 || computerCounter === 3) {
            endTheGame();
        }

    }

    function endTheGame() {

        endOfGamePopup.classList.add('active')
        if (playerCounter === 3) {
            gameOutcomeText.innerHTML = 
            `You <span class="outcome-highlight">won</span> the game<br> 
            ${playerCounter} : ${computerCounter}`;
        } else {
            gameOutcomeText.innerHTML = 
            `You <span class="outcome-highlight">lost</span> the game<br>
            ${playerCounter} : ${computerCounter}`;
        }

        closeButton.addEventListener('click', () => {
            setTimeout(resetToDefaultState, 200);
            endOfGamePopup.classList.remove('active');
        });
        
    }

    function resetToDefaultState() {

        roundOutcomeText.textContent = 'Choose your weapon best of 5!';
        yourSignDiv.innerHTML = '❔';
        compSignDiv.innerHTML = '❔';
        yourScore.textContent = 'You: 0';
        compScore.textContent = 'Computer: 0';
        playerCounter = 0;
        computerCounter = 0;
        yourSignDiv.classList.remove('won', 'lost', 'your-choice');
        compSignDiv.classList.remove('won', 'lost', 'comp-choice');

    }

    playRound();
}

btnSigns.forEach(button => {
    button.addEventListener('click', whenButtonClicked);
});


