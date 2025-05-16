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





function checkInputHandler() {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  }
}

// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
// })

document.querySelector('.check').addEventListener('click', checkInputHandler);
