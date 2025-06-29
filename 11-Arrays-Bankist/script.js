'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);


// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// Simple Array Methods
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// slice
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1)); // último elemento

console.log(arr.slice(1, -1));

console.log('slice:', arr.slice());
console.log('spreag y corchetes:', [...arr]);


// splice
// console.log(arr.splice(2, 4));
console.log(arr.splice(-1));


// reverse
let arr2 = ['1', '2', '3', '4', '5'];
console.log(arr2.reverse());

// concat
const arr3 = arr.concat(arr2);
console.log(arr3);
console.log([...arr, ...arr2]);

// join
console.log(arr.join('-'));
*/



/////////////////////////////////////////////////
// The at method
/*
const arr = [11, 17, 19];

console.log(arr[0]);
console.log(arr.at(0));

// Para obtener el último elemento del arreglo
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1));
console.log(arr.slice(-1)[0]);

console.log(arr.at(-1));

console.log('jerry'.at(0));
console.log('jerry'.at(-1));
*/


/////////////////////////////////////////////////
// forEach
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [index, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${index}: you deposited`.padEnd(26), `${String(movement).padStart(7)}`);
  } else {
    console.log(`Movement ${index}: you withdraw`.padEnd(26), `${String(Math.abs(movement)).padStart(7)}`);
  }
}


console.log('--------forEach---------');
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index}: you deposited`.padEnd(26), `${String(movement).padStart(7)}`);
  } else {
    console.log(`Movement ${index}: you withdraw`.padEnd(26), `${String(Math.abs(movement)).padStart(7)}`);
  }
});
*/


/////////////////////////////////////////////////
// forEach for maps and sets
/*
const currencies = new Map([
  ['USD', 'US dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, entireMap) {
  console.log(`${key}: ${value}`);
  console.log(`Map: ${entireMap}`, entireMap);
});

const currenciesSet = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log('currenciesSet', currenciesSet);

currenciesSet.forEach(function (value, _, entireSet) {
  console.log(`${value}: ${_}`);
  console.log('Set', entireSet);
});
*/









