"use strict";

// let message = document.querySelector(".message");

// console.log(message.textContent);
let message = document.querySelector(".message");
let again = document.querySelector(".again");
let number = document.querySelector(".number");
let score = document.querySelector(".score");
let guess = document.querySelector(".guess");
let check = document.querySelector(".check");
let highscore = document.querySelector(".highscore");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreNumber = 20;
let highscoreNumber = 0;

check.addEventListener("click", function () {
  const guessedNumber = Number(guess.value);

  if (!guessedNumber || guessedNumber <= 0 || guessedNumber > 20) {
    message.textContent = "🚫 Wrong Input";
  } else if (guessedNumber > secretNumber) {
    message.textContent = "👇🏾 Lower!";
    scoreNumber--;
    score.textContent = scoreNumber;
  } else if (guessedNumber < secretNumber) {
    message.textContent = "👆🏾 Higher!";
    scoreNumber--;
    score.textContent = scoreNumber;
  } else {
    message.textContent = "🎉 YOU WIN!";
    if (scoreNumber > highscoreNumber) {
      highscore.textContent = scoreNumber;
    }
    number.textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "green";
  }
});

again.addEventListener("click", function () {
  number.textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  message.textContent = "Start guessing";
  scoreNumber = 20;
  score.textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
