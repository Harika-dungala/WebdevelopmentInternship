function guessAction() {
    const userGuess = document.getElementById("guess").value.toLowerCase();
    const choices = ["rock", "paper", "scissor"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const ggImage = document.getElementById("gg");
    ggImage.src = computerChoice + ".png";
    ggImage.alt = computerChoice;
    let result = "";
    if (userGuess === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userGuess === "rock" && computerChoice === "scissor") ||
        (userGuess === "paper" && computerChoice === "rock") ||
        (userGuess === "scissor" && computerChoice === "paper")
    ) {
        result = "You win!";
    } else {
        result = "Computer wins!";
    }

    document.getElementById("result").textContent = 
        `You chose ${userGuess}. Computer chose ${computerChoice}. ${result}`;
}
