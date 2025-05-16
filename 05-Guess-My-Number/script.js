'use strict';

/*
console.log(document.querySelector('.message').textContent);
console.log(document.querySelector('#mensaje').baseURI);
console.log(document.querySelector('.btn'));


document.querySelector('.message').textContent = 'Congratulations ✨';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 11;


document.querySelector('.guess').value = 17;
console.log(document.querySelector('.guess').value);
*/



const secretNumber = Math.trunc((Math.random() * 20)) + 1;
const initialScore = 5;
let currentScore = initialScore;
document.querySelector('.score').textContent = initialScore;


console.log('Secret Number: ', secretNumber);
// document.querySelector('.number').textContent = secretNumber;

function lockGame() {
  document.querySelector('.check').disabled = true;
  document.querySelector('.again').style.background = '#fffb00'
}


function gameOverMan() {
  console.log('👽 Game Over Man!')
  document.querySelector('.message').textContent = '👽 Game Over Man!';
  document.querySelector('.number').textContent = secretNumber;
}

function updateScore() {
  currentScore--;
  document.querySelector('.score').textContent = currentScore;
}

function checkInputHandler() {
  const guessInput = document.querySelector('.guess').value;
  const guess = Number(guessInput);
  console.log(guess, typeof guess);

  if (currentScore > 0) {
    if (!guessInput) {
      document.querySelector('.message').textContent = '⛔ No number!';
    } else if (guess < 1 || guess > 20) {
      document.querySelector('.message').textContent = '✋ Between 1 and 20';
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = 'Congratulations ✨';
      lockGame();
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent = '📈 Too high!';
      updateScore();
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = '📉 Too low!';
      updateScore();
    }
  }
  if (currentScore === 0) {
    gameOverMan();
    lockGame();
  };
}



document.querySelector('.check').addEventListener('click', checkInputHandler);
