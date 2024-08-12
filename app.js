let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const drawGame = (userChoice) => {
     msg.innerText = `Game was draw! Both chose ${userChoice}`;
     msg.style.backgroundColor = "#3184cc"
}

const showWinner = (userWin, userChoice, compChoice) => {
     if (userWin) {
          userScore ++;
          userScorePara.innerText = userScore;
          msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
          msg.style.backgroundColor = "green"
     } else {
          computerScore++;
          compScorePara.innerText = computerScore;
          msg.innerText = `You lose! ${compChoice} beats  your ${userChoice}`;
          msg.style.backgroundColor = "red"
     }
}

const genCompChoice = () => {
     const options = ["rock", "paper", "scissors"];
     const randIdx = Math.floor(Math.random() * 3);
     return options[randIdx];
}

const playGame = (userChoice) => {
     const compChoice = genCompChoice();
     if (userChoice == compChoice) {
          drawGame(userChoice);
     } else {
          let userWin = true;
          if (userChoice == "rock") {
               userWin = compChoice == "paper" ? false : true;
          } else if (userChoice == "paper") {
               userWin = compChoice == "scissors" ? false : true;
          } else if (userChoice == "scissors") {
               userWin = compChoice == "rock" ? false : true;
          }
          showWinner(userWin, userChoice, compChoice);
     }
}

choices.forEach((choice) => {
     choice.addEventListener("click", () => {
          const userChoice = choice.getAttribute("id");
          playGame(userChoice);
     })
});