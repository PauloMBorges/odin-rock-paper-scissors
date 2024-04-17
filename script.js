// randomly selects 'Rock', 'Paper' or 'Scissors'
function getComputerChoice() {
    // random integer from 0 to 2
    let randomNumber = Math.floor(Math.random() * 3);
    // 0 = 'Rock', 1 = 'Paper', 2 = 'Scissors'
    let computerChoice; 
    if (randomNumber === 0) {
        computerChoice = 'Rock';
    } else if (randomNumber === 1) {
        computerChoice = 'Paper';
    } else {
        computerChoice= 'Scissors';
    }

    return computerChoice;
}


// asks user's choice
function playerSelection() {
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

