function computerPlay() {
        let int = Math.floor(Math.random() * (3 - 1 + 1) + 1)
        if (int === 1) {
            outcome = "Rock";
        } else if (int === 2) {
            outcome = "Paper";
        } else if (int == 3) {
            outcome = "Scissors";
        }
        return outcome;
}

console.log(computerPlay());