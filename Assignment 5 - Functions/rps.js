const gameArray = ["rock", "paper", "scissors"];

function playGame(user, computer = gameArray[Math.floor(Math.random()*gameArray.length)]) {
    if (user === computer) {
        console.log("tie");
    } else if ((user === "rock" && computer === "scissors") || (user === "scissors" && computer === "paper") || (user === "paper" && computer === "rock")) {
        console.log("win");
    } else if ((user === "rock" && computer === "paper") || (user === "scissors" && computer === "rock") || (user === "paper" && computer === "scissors")) {
        console.log("lose");
    };
}

playGame("rock");