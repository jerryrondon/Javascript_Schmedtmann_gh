'use strict';

let highscore = 0;
let secretNumber = Math.trunc((Math.random() * 20)) + 1;
const initialScore = 10;
let currentScore = initialScore;
document.querySelector('.score').textContent = initialScore;



function lockGame() {
  document.querySelector('.check').disabled = true;
  document.querySelector('.again').style.backgroundColor = '#fffb00'
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
      if (currentScore > highscore) {
        highscore = currentScore;
        document.querySelector('.highscore').textContent = highscore;
        document.querySelector('.message').textContent = '🎊 New High Score! 🎉';
      } else {
        document.querySelector('.message').textContent = 'Congratulations ✨';
      }
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
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
  document.querySelector('.guess').focus();
}

function resetGame() {
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.trunc((Math.random() * 20)) + 1;
  currentScore = initialScore;
  document.querySelector('.check').disabled = false;
  document.querySelector('.again').style.backgroundColor = '#eee';
  document.querySelector('.score').textContent = currentScore;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.guess').focus();
}


document.querySelector('.check').addEventListener('click', checkInputHandler);
document.querySelector('.again').addEventListener('click', resetGame);
document.querySelector('.guess').addEventListener('keyup', function (event) {
  if (event.key === "Enter") checkInputHandler();
});
