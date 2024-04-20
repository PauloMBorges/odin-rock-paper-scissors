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

let computerScore = 0; 
let playerScore = 0;


function playSingleRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let result;
    if (computerSelection === playerSelection) {
        result = `Tie! Both chose ${capitalizeFirstLetter(playerSelection)}`;
    } 
    else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'paper' && computerSelection === 'rock') ||
            (playerSelection === 'scissors' && computerSelection === 'paper')) {
        result = `You Win! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}`;
        playerScore++;
    }
    else {
        result = `You Lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}`;
        computerScore++;
    }

    updateScore();
    checkWinner();

    document.querySelector("#result").innerText = result;
    return result;
}

function updateScore() {
    document.querySelector("#score").innerText = `Player: ${playerScore} Computer: ${computerScore}`;
}

function checkWinner() {
    if (playerScore >= 5) {
        document.querySelector("#winner").innerText = "You win the game!";
        disableButtons();
    } else if (computerScore >= 5) {
        document.querySelector("#winner").innerText = "The computer wins the game!";
        disableButtons();
    }
}

function disableButtons() {
    document.querySelector("#rock").disabled = true;
    document.querySelector("#paper").disabled = true;
    document.querySelector("#scissors").disabled = true;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

document.querySelector("#rock").addEventListener("click", function() {
    playSingleRound("rock");
});

document.querySelector("#paper").addEventListener("click", function() {
    playSingleRound("paper");
});

document.querySelector("#scissors").addEventListener("click", function() {
    playSingleRound("scissors");
});
