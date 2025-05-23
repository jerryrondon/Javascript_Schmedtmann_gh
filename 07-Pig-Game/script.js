'use strict';


const scoreEl = [document.getElementById('score--0'), document.getElementById('score--1')];
const currentScoreEl = [document.getElementById('current--0'), document.getElementById('current--1')];
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
scoreEl[0].textContent = 0;
scoreEl[1].textContent = 0;
diceEl.classList.add('hidden');
let score = [0, 0];
let currentScore = [0, 0];
let activePlayer = 0;

const switchPlayers = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;
}

const displayCurrentScore = function () {
  currentScoreEl[activePlayer].textContent = currentScore[activePlayer];
}

const displayScore = function () {
  scoreEl[activePlayer].textContent = score[activePlayer];
}

const updateScore = function () {
  score[activePlayer] += currentScore[activePlayer];
}

const updateCurrentScore = function (dice) {
  currentScore[activePlayer] += dice;
}

const resetCurrentScore = function () {
  currentScore[activePlayer] = 0;
}

const resetScore = function () {
  score = [0, 0];
}

const rollDice = function () {
  console.log('Rolling the dice');
  const dice = Math.trunc(Math.random() * 6 + 1);
  console.log('dice: ', dice);
  diceEl.src = `dice-${dice}.png`;
  diceEl.classList.remove('hidden');
  return dice;
}

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  const dice = rollDice();

  if (dice !== 1) {
    updateCurrentScore(dice);
    displayCurrentScore();
  } else {
    resetCurrentScore();
    displayCurrentScore();
    switchPlayers();
    console.log('Dice is 1 ----- switch');
  }
});

btnHold.addEventListener('click', function () {
  console.log('Hold');
  updateScore();
  displayScore();
  resetCurrentScore();
  displayCurrentScore();
  if (score[activePlayer] >= 100) {
    console.log(`Player ${activePlayer + 1} Wins!`);
    // Game over secuence.
  }

  switchPlayers();
});