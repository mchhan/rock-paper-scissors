let playerSelection = prompt("Do you choose Rock, Paper, or Scissors?").toLowerCase();
console.log("Player has chosen to play" + " " + playerSelection);

let computerSelection;
function computerSelectionPlay() {
    let int = Math.floor(Math.random() * (3 - 1 + 1) + 1)
    if (int === 1) {
        computerSelection = "Rock";
    } else if (int === 2) {
        computerSelection = "Paper";
    } else if (int == 3) {
        computerSelection = "Scissors";
    }
        return computerSelection;
}
console.log("Computer plays" +" " + computerSelectionPlay());

function singleRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "Paper") {
        result = "You lose! Paper beats Rock";
    } else if (playerSelection == "paper" && computerSelection == "Scissors") {
        result = "You lose! Scissors beats Paper";
    } else if (playerSelection == "scissors" && computerSelection == "Rock") {
        result = "You lose! Rock beats Scissors";
    } else if (playerSelection == "rock" && computerSelection == "Scissors") {
        result = "You win! Rock beats Scissors";
    } else if (playerSelection == "paper" && computerSelection == "Rock") {
        result = "You win! Paper beats Rock";
    } else if (playerSelection == "scissors" && computerSelection == "Paper") {
        result = "You win! Scissors beats Paper";
    } else if (playerSelection == "rock" && computerSelection == "Rock") {
        result = "Tied game. Try again";
    } else if (playerSelection == "paper" && computerSelection == "Paper") {
        result = "Tied game. Try again";
    } else if (playerSelection == "scissors" && computerSelection == "Scissors") {
        result = "Tied game. Try again";
    }
    return result;
}

console.log(singleRound(playerSelection, computerSelection));
