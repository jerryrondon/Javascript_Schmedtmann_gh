'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

///////////////////////////////////////
// Modal window

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
// Button scrolling

btnScrollTo.addEventListener('click', function (event) {
  section1.scrollIntoView({ behavior: 'smooth' });
});



///////////////////////////////////////
// Page navigation

// document.querySelectorAll('.nav__link').forEach(function (element) {
//   element.addEventListener('click', function (event) {
//     event.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });


// Event delegation
// 1. Agregar un event listener a un ancestro comun a los elementos de interes
// 2. Determinar que elemento origino el evento

document.querySelector('.nav__links').addEventListener('click', function (event) {
  console.log(event.target);
  event.preventDefault();

  if (event.target.classList.contains('nav__link') && !event.target.classList.contains('btn--show-modal')) {
    const id = event.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});




///////////////////////////////////////
///////////////////////////////////////
// Selecting, Creating, and Deleting Elements

// // Selecting
// console.log(document.documentElement);

// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);


// console.log(document.getElementById('section--1'));

// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// const allButtons2 = document.getElementsByClassName('btn');
// console.log(allButtons2);


// // Creating
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);

// // const message2 = message.cloneNode(true);
// // header.append(message2);

// // console.log(message);


// // header.before(message2);
// // header.after(message2);



// // Deleting
// document.querySelector('.btn--close-cookie').addEventListener('click', function () {
//   message.remove();
// });


///////////////////////////////////////
// Styles, Attributes and Classes


// // Styles
// message.style.backgroundColor = '#37383d';
// // message.style.width = '100vw';
// message.style.width = '120%';

// console.log(message.style.backgroundColor);
// console.log(message.style.color);

// console.log(getComputedStyle(message));

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height = Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';


// document.documentElement.style.setProperty('--color-primary', 'orangered');

// const root = document.documentElement;
// const styles = getComputedStyle(root);
// const primaryColor = styles.getPropertyValue("--color-primary").trim();
// console.log('primaryColor: ', primaryColor);


// // Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// console.log('designer: ', logo.getAttribute('designer'));

// logo.alt = 'Minimalist logo';
// console.log(logo.alt);

// logo.setAttribute('company', 'Bankist');
// console.log(document.querySelector('.nav').innerHTML);

// console.log(logo.getAttribute('src'));


// console.log('data-version-number:', logo.dataset.versionNumber);



// // Styles
// logo.classList.add('clase_1', 'clase_2', 'clase_3', 'clase_4');
// console.log(document.querySelector('.nav').innerHTML);

// logo.classList.remove('clase_1', 'clase_2');
// console.log(document.querySelector('.nav').innerHTML);

// logo.classList.toggle('clase_1');
// console.log(document.querySelector('.nav').innerHTML);

// console.log(logo.classList.contains('clase_1'));
// console.log(logo.classList.contains('clase_2'));


// // NO usar
// // logo.className = 'some_class';



///////////////////////////////////////
// Implementing Smooth Scrolling

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function (event) {

//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);

//   console.log(event.target.getBoundingClientRect());

//   console.log('Current scroll (X,Y)', window.scrollX, window.scrollY);

//   console.log('Viewport height/width',
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth);

//   console.log('Viewport Left/Top',
//     document.documentElement.clientLeft,
//     document.documentElement.clientTop);

//   //  window.scrollTo(s1coords.left + window.scrollX, s1coords.top + window.scrollY - 10);

//   // window.scrollTo({
//   //   left: s1coords.left + window.scrollX,
//   //   top: s1coords.top + window.scrollY,
//   //   behavior: 'smooth'
//   // });

//   section1.scrollIntoView({ behavior: 'smooth' });


// });




///////////////////////////////////////
// Types of Events and Event Handlers

// const h1 = document.querySelector('h1');

// const alertH1 = function () {
//   alert('addEventListener event');
// }

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 5000);

// h1.onmouseenter = function () { alert('onmouseenter event'); };







///////////////////////////////////////
// Event Propagation in Practice

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// const nav = document.querySelector('.nav');
// const linkList = document.querySelector('.nav__links');
// const navLink = document.querySelector('.nav__link');



// nav.addEventListener('click', function (event) {
//   this.style.backgroundColor = randomColor();
//   console.log('1 Nav Bar', '--target :', event.target, '--current target :', event.currentTarget);
//   console.log('currentTarget === this', event.currentTarget === this);
// });

// linkList.addEventListener('click', function (event) {
//   this.style.backgroundColor = randomColor();
//   console.log('2 Link List', '--target :', event.target, '--current target :', event.currentTarget);
//   console.log('currentTarget === this', event.currentTarget === this);

//   // Stop propagation
//   event.stopPropagation();
// }, true);

// navLink.addEventListener('click', function (event) {
//   this.style.backgroundColor = randomColor();
//   console.log('3 navlink', '--target :', event.target, '--current target :', event.currentTarget);
//   console.log('currentTarget === this', event.currentTarget === this);
// });





///////////////////////////////////////
// DOM Traversing

const h1 = document.querySelector('h1');

console.log(h1);


// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));

console.log('childNodes: ', h1.childNodes);
console.log('children: ', h1.children);


console.log('First element child: ', h1.firstElementChild);
console.log('Last element child: ', h1.lastElementChild);

h1.firstElementChild.style.color = 'orangered';



// Going upwards: parents
console.log('h1 parentnode', h1.parentNode);
console.log(h1.parentElement);

console.log(h1.closest('.header'));


// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function (element) {
  if (element !== h1)
    element.style.transform = 'scale(0.5)';
});
