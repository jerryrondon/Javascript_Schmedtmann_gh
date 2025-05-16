'use strict';

let highscore = 0;
let secretNumber = Math.trunc((Math.random() * 20)) + 1;
const initialScore = 10;
let currentScore = initialScore;
document.querySelector('.score').textContent = initialScore;
document.querySelector('.guess').focus();

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function lockGame() {
  document.querySelector('.check').disabled = true;
  document.querySelector('.guess').disabled = true;
  document.querySelector('.again').style.backgroundColor = '#fffb00'
}

function gameOverMan() {
  console.log('👽 Game Over Man!');
  displayMessage('👽 Game Over Man!');
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
      displayMessage('⛔ No number!');
    } else if (guess < 1 || guess > 20) {
      displayMessage('✋ Between 1 and 20');
    } else if (guess === secretNumber) {
      if (currentScore > highscore) {
        highscore = currentScore;
        document.querySelector('.highscore').textContent = highscore;
        displayMessage('🎊 New High Score! 🎉');
      } else {
        displayMessage('Congratulations ✨');
      }
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      lockGame();
    } else {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      updateScore();
    }
  }
  if (currentScore === 0) {
    gameOverMan();
    lockGame();
  };
  document.querySelector('.guess').focus();
}

function resetGame() {
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.trunc((Math.random() * 20)) + 1;
  currentScore = initialScore;
  document.querySelector('.check').disabled = false;
  document.querySelector('.guess').disabled = false;
  document.querySelector('.again').style.backgroundColor = '#eee';
  document.querySelector('.score').textContent = currentScore;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.guess').focus();
}


document.querySelector('.check').addEventListener('click', checkInputHandler);
document.querySelector('.again').addEventListener('click', resetGame);
document.querySelector('.guess').addEventListener('keyup', function (event) {
  if (event.key === "Enter") checkInputHandler();
});
