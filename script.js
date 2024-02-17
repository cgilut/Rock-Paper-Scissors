"use strict"

const buttonSigns = document.querySelectorAll('.wrapper__button-sign')
const yourSignDiv = document.querySelector('.wrapper__your-sign')
const compSignDiv = document.querySelector('.wrapper__computer-sign')
const roundOutcomeText = document.querySelector('.wrapper__outcome')
const yourScore = document.querySelector('.wrapper__your-score')
const compScore = document.querySelector('.wrapper__computer-score')
const endOfGamePopup = document.querySelector('.endOfGamePopup')
const gameOutcomeText = document.querySelector('.endOfGamePopup__inner-text')
const closeButton = document.querySelector('#endOfGamePopup__closeButton')
const body = document.querySelector('body')
const modeButton = document.querySelector('.header__buttons-mode')
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
        body.classList.add('blur')
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
        yourSignDiv.innerHTML = '?';
        compSignDiv.innerHTML = '?';
        yourScore.textContent = 'You: 0';
        compScore.textContent = 'Computer: 0';
        playerCounter = 0;
        computerCounter = 0;
        yourSignDiv.classList.remove('won', 'lost', 'your-choice');
        compSignDiv.classList.remove('won', 'lost', 'comp-choice');
        body.classList.remove('blur')
    }

    playRound();
}

buttonSigns.forEach(button => {

    button.addEventListener('click', whenButtonClicked);

});

const mode = document.querySelector('.header__buttons-mode')
const el = document.documentElement.style
let lightMode = localStorage.getItem('lightMode')
// const enableLightMode = () => {
//     lightMode = 'enabled'
// }

mode.addEventListener('click', () => { 

    lightMode = localStorage.getItem('lightMode');
    if (lightMode !== 'enabled') {
        // if its dark mode, switch to light
        // and change the icon sun
        localStorage.setItem('lightMode', 'enabled')
        modeButton.innerHTML = '<ion-icon name="moon-outline"></ion-icon>'
        lightModeColors()
    }
    else {
        // if its light mode, switch to dark
        // and change the icon to moon
        localStorage.setItem('lightMode', null)
        modeButton.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>'
        darkModeColors()
    }

});

function lightModeColors() {
    el.setProperty('--font-color', '#000')
    el.setProperty('--header-color', '#777777')
    el.setProperty('--background-color', '#cccccc')
    el.setProperty('--wrapper-color', '#bbbbbb')
    el.setProperty('--button-glow', '0 0 10px 5px rgb(38, 0, 255, 0.5)')
    el.setProperty('--orange', '#000')
    el.setProperty('--sign-button-color', '#fff')
    el.setProperty('--sign-button-hover', '#fcffd0')
};

function darkModeColors() {
    el.setProperty('--font-color', '#fff')
    el.setProperty('--header-color', '#000')
    el.setProperty('--background-color', '#333333')
    el.setProperty('--wrapper-color', '#414141')
    el.setProperty('--button-glow', '0 0 10px 5px rgba(255, 255, 255, 0.3)')
    el.setProperty('--orange', '#f0705a')
    el.setProperty('--sign-button-color', '#606060')
    el.setProperty('--sign-button-hover', '#adadad')
};