// randomly selects 'Rock', 'Paper' or 'Scissors'
function getComputerChoice() {
    // random integer from 0 to 2
    let randomNumber = Math.floor(Math.random() * 3);
    // 0 = 'Rock', 1 = 'Paper', 2 = 'Scissors'
    let computerChoice; 
    if (randomNumber === 0) {
        computerChoice = 'rock';
    } else if (randomNumber === 1) {
        computerChoice = 'paper';
    } else {
        computerChoice= 'scissors';
    }

    return computerChoice;
}

// asks user's choice
function getPlayerChoice() {
    let checkChoice = 1; 
    let playerChoice;
    // checks if the user's input is valid. Continues the loop until it receives a valid answer.
    while (checkChoice) {
        playerChoice = prompt("Shoot! (Choose 'Rock', 'Paper' or 'Scissors')").toLowerCase(); // case insensitive
        if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
            checkChoice = 0; // valid answer -> breaks the loop
        } else{
            alert("Invalid answer. Please choose 'Rock', 'Paper' or 'Scissors'");
        }
    }
    return playerChoice
}

let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();

function playSingleRound(computerSelection, playerSelection) {
    let result;
    if (computerSelection === playerSelection) {
        result = `Tie! Both chose ${capitalizeFirstLetter(playerSelection)}`;
    } 
    else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'paper' && computerSelection === 'rock') ||
            (playerSelection === 'scissors' && computerSelection === 'paper')) {
        result = `You Win! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}`;
    }
    else {
        result = `You Lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}`;
    }
    return result;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(playSingleRound(computerSelection, playerSelection));
