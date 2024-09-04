let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

//Returning a random choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * options.length);
    return options[randIdx];
};

//Draw Game
const drawGame = () => {
    //console.log("Game was a draw");
    msg.innerText = "Game was a draw. Play again";
    msg.style.backgroundColor = "#251351"
};

//Displaying winner
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        //console.log("Yow win");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win!. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#03C03C"
    } else {
        //console.log("You lose");
        compScore++;
        compScorePara.innerText = compScore
        msg.innerText = `You Lose :( ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red" 
    }
};

//Finding who wins
const playGame = (userChoice) => {
    //console.log("user choice =", userChoice);
    const compChoice = genCompChoice();
    //console.log("computer choice =", compChoice);

    if(userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            userWin =  compChoice === "scissors" ? false : true;
        } else {
            userWin =  compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

