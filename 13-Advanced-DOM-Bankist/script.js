'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }

});



///////////////////////////////////////
///////////////////////////////////////
// Selecting, Creating, and Deleting Elements

// Selecting
console.log(document.documentElement);

console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);


console.log(document.getElementById('section--1'));

const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

const allButtons2 = document.getElementsByClassName('btn');
console.log(allButtons2);


// Creating
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = 'We use cookes for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

header.prepend(message);

// const message2 = message.cloneNode(true);
// header.append(message2);

// console.log(message);


// header.before(message2);
// header.after(message2);



// Deleting
document.querySelector('.btn--close-cookie').addEventListener('click', function () {
  message.remove();
});
