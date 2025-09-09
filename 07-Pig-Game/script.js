'use strict';


const scoreEl = [document.getElementById('score--0'), document.getElementById('score--1')];
const currentScoreEl = [document.getElementById('current--0'), document.getElementById('current--1')];
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const playerSectionEl = [document.querySelector('.player--0'), document.querySelector('.player--1')];



// Starting conditions
const FINAL_SCORE = 50;
let playing = true;
scoreEl[0].textContent = 0;
scoreEl[1].textContent = 0;
diceEl.classList.add('hidden');
const score = [0, 0];
const currentScore = [0, 0];
let activePlayer = 0;

const switchPlayers = function () {
  playerSectionEl[activePlayer].classList.toggle('player--active');
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerSectionEl[activePlayer].classList.toggle('player--active');
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

const newGame = function () {
  console.log('New Game');
  score[0] = 0;
  score[1] = 0;
  scoreEl[0].textContent = 0;
  scoreEl[1].textContent = 0;
  currentScore[0] = 0;
  currentScore[1] = 0;
  currentScoreEl[0].textContent = 0;
  currentScoreEl[1].textContent = 0;
  diceEl.classList.add('hidden');
  activePlayer = 0;
  playerSectionEl[0].classList.add('player--active');
  playerSectionEl[1].classList.remove('player--active');
  playerSectionEl[0].classList.remove('player--winner');
  playerSectionEl[1].classList.remove('player--winner');
  playing = true;
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
  if (playing) {
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
  }
});

// Hold functionality
btnHold.addEventListener('click', function () {
  if (playing) {
    console.log('Hold');
    updateScore();
    displayScore();
    resetCurrentScore();
    displayCurrentScore();
    if (score[activePlayer] >= FINAL_SCORE) {
      playing = false;
      console.log(`Player ${activePlayer + 1} Wins!`);
      diceEl.classList.add('hidden');
      playerSectionEl[activePlayer].classList.remove('player--active');
      playerSectionEl[activePlayer].classList.add('player--winner');
    } else {
      switchPlayers();
    }
  }
});

btnNew.addEventListener('click', newGame);