let choices = document.querySelectorAll(".choice");
let messageContainer = document.querySelector(".message-container");
let dispMsg = document.querySelector(".msg");
let userCount = document.querySelector(".userScore");
let botCount = document.querySelector(".botScore");

let userScore = 0;
let botScore = 0;

const genBotChoice = () => {
  let index = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * 3);
  let bot = index[random];
  return bot;
};

const showWinner = (userWin) => {
  if (userWin) {
    console.log("User Win!");
    userScore++;
    dispMsg.innerText = "Congralutaions! You have Won 🤩✨🎉";
    messageContainer.style.backgroundColor = "green";
    userCount.innerText = userScore;
  } else {
    console.log("Bot Win!");
    botScore++;
    dispMsg.innerText = "Bot Have Won The Game 😁😁";
    messageContainer.style.backgroundColor = "orange";
    botCount.innerText = botScore;
  }
};
const playGame = (userChoice) => {
  console.log("User Choice is = " + userChoice);
  let botChoice = genBotChoice();
  console.log("Bot Choice is = " + botChoice);
  //   console.log(botChoice, userChoice);
  if (botChoice === userChoice) {
    console.log("Game Draw");
    dispMsg.innerText = "Game Draw 😒🤦‍♂️🤦‍♂️";
    messageContainer.style.backgroundColor = "red";
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // paper , scissors
      userWin = botChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock , scissors
      userWin = botChoice === "scissors" ? false : true;
    } else {
      // rock , paper
      userWin = botChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
