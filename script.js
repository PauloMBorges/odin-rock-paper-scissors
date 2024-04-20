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

/*
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

*/
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

    document.querySelector("#result").innerText = result;
    return result;
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

/*
function playGame() {
    // five round game
    for(let i = 0; i < 5; i++) {
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        alert(playSingleRound(computerSelection, playerSelection));
    }
}
*/