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




const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (movement, index) {
    const movementType = movement > 0 ? 'deposit' : 'withdrawal';
    const movementRowHTML = `
      <div class="movements__row">
        <div class="movements__type movements__type--${movementType}">${index + 1} ${movementType}</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">${movement}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', movementRowHTML);


  });


};

displayMovements(account1.movements);


const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  labelBalance.textContent = `${balance} €`
};

calcDisplayBalance(account1.movements);


/////////////////////////////////////////////////
// Computing usernames

// const accounts = [account1, account2, account3, account4];

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

const createUsernames = function (accounts) {
  accounts.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(owner => owner[0])
      .join('');
  });
};
createUsernames(accounts);
console.log(accounts);












// Fin de BANKIST APP
/////////////////////////////////////////////////


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





/////////////////////////////////////////////////
// The map Method
/*
const eurToUSD = 1.1;

// const movementsUSD = account1.movements.map(function (mov) {
//   return mov * eurToUSD;
// });

const movementsUSD = account1.movements.map((mov) => mov * eurToUSD);


console.log(account1.movements);
console.log(movementsUSD);


// Utilizando un for loop
const movementsUSDfor = [];

for (const movement of account1.movements) {
  movementsUSDfor.push(movement * eurToUSD);
}

console.log(movementsUSDfor);



const movementsDescriptions = account1.movements.map((movement, index) =>
  `Movement ${index + 1}: you ${movement > 0 ? 'deposited' : 'withdrew'}`.padEnd(26) +
  `${String(Math.abs(movement))}`.padStart(7)
);

console.log(movementsDescriptions);
*/




/////////////////////////////////////////////////
// The filter method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(mov => mov > 0);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);


console.log(movements);
console.log(deposits);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);



/////////////////////////////////////////////////
// The reduce Method

// const balance = movements.reduce(function (accumulator, currentValue, index, originalArray) {
//   console.log(`Iteration ${index}: accumulator ${accumulator}`);

//   return accumulator + currentValue;
// }, 0);

const balance = movements.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

let balance2 = 0;
for (const currentValue of movements) balance2 += currentValue;

console.log(balance);
console.log(balance2);


// Calcular el valor máximo de un arreglo

// const max = movements.reduce(function (acc, cur) {
//   return cur > acc ? cur : acc;
// }, movements[0]);

const max = movements.reduce((acc, cur) => cur > acc ? cur : acc, movements[0]);

console.log(max);
