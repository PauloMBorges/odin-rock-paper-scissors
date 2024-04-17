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
