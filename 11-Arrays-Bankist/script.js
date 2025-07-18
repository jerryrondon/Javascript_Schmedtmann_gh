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
  type: 'premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standar',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'standar',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
};

const account5 = {
  owner: 'Jerry Rondon',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 5555,
  type: 'premium',
};

const account6 = {
  owner: 'Karina Moreno',
  movements: [],
  interestRate: 1,
  pin: 6666,
  type: 'premium',
};

const accounts = [account1, account2, account3, account4, account5, account6];

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




const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (movement, index) {
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


const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  labelBalance.textContent = `${account.balance}€`;
};


const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}$€`;

  const withdrawals = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(withdrawals)}$€`;

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}$€`;
}


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
// console.log(accounts);


const updateUI = function (account) {
  // Display and calculate movemnts
  displayMovements(account.movements);

  // Display and calculate the balance
  calcDisplayBalance(account);

  // Display and calculate summary
  calcDisplaySummary(account);
}


const clearFormElement = function (...formElements) {
  formElements.forEach((element) => {
    element.value = '';
    element.blur();
  });
}


/////////////////////////////////////////////////
// Event Handlers

let currentAccount;

btnLogin.addEventListener('click', function (event) {
  event.preventDefault();
  currentAccount = accounts.find(account => account.username === inputLoginUsername.value);
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Clear input fields
    clearFormElement(inputLoginUsername, inputLoginPin);

    // Display UI and welcome message
    containerApp.style.opacity = 1;
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;

    updateUI(currentAccount);
  }
});



btnTransfer.addEventListener('click', function (event) {
  event.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(account => account.username === inputTransferTo.value);
  clearFormElement(inputTransferAmount, inputTransferTo);

  if (
    amount > 0
    && receiverAccount
    && amount <= currentAccount.balance
    && receiverAccount?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);
    updateUI(currentAccount);
  } else {
    alert('Error');
  }
  console.log(currentAccount, receiverAccount);
});


btnLoan.addEventListener('click', function (event) {
  event.preventDefault();

  const loanAmount = Number(inputLoanAmount.value);
  if (loanAmount > 0
    && currentAccount.movements.some(mov => mov >= loanAmount * 0.1)) {
    console.log('Loan', loanAmount);
    currentAccount.movements.push(loanAmount);
    updateUI(currentAccount);
  }
  clearFormElement(inputLoanAmount);
});


btnClose.addEventListener('click', function (event) {
  event.preventDefault();
  if (
    currentAccount.username === inputCloseUsername.value
    && currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    accounts.splice(index, 1);
    console.log(index);
    console.log(accounts);
    containerApp.style.opacity = 0;
  }
  clearFormElement(inputCloseUsername, inputClosePin);
});

let sorted = false;
btnSort.addEventListener('click', function (event) {
  event.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});







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
/*
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
*/




/////////////////////////////////////////////////
// The Magic of Chaining Methods
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUSD = 1.1;

const totalDepositUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUSD)
  .reduce((acc, mov) => acc + mov);

console.log(totalDepositUSD);
*/






/////////////////////////////////////////////////
// The find method
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find(mov => mov < 0);

console.log(movements);
console.log(firstWithdrawal);




console.log(accounts);
const account = accounts.find(account => account.owner === 'Jessica Davis');
console.log('find', account);


let accountFor;
for (const account of accounts) {
  if (account.owner === 'Jessica Davis') {
    console.log(account);
    accountFor = account;
    break;
  }
}

console.log('for', accountFor);
*/





/////////////////////////////////////////////////
// The New findLast and findLastIndex Methods
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

const lastWithdrawal = movements.findLast(mov => mov < 0);
console.log(lastWithdrawal);

// 'Your last large (>1k) movement was X movements ago'
const lastLargeMovementIndex = movements.findLastIndex(mov => Math.abs(mov) > 1000);
console.log(lastLargeMovementIndex);
console.log(movements[lastLargeMovementIndex]);
console.log(`Your last large movement was ${movements.length - lastLargeMovementIndex - 1} movement${movements.length - lastLargeMovementIndex - 1 > 1 ? 's' : ''} ago`);
*/



/////////////////////////////////////////////////
// some and every
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Equality
console.log('includes: ', movements.includes(-130));

// Some
console.log('some: ', movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0);
console.log('Any deposits: ', anyDeposits);


// Every
console.log('Movements > 0', movements.every(mov => mov > 0));
console.log('Account 4 movements > 0', account4.movements.every(mov => mov > 0));
*/

/////////////////////////////////////////////////
// flat an flatMap
/*
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log('arr.flat() ', arr.flat());


const arr2 = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log('arr2.flat() ', arr2.flat());
console.log('arr2.flat(2) ', arr2.flat(2));



// Balance general

// Recordar:
// const accounts = [account1, account2, account3, account4, account5];
// const account5 = {
//   owner: 'Jerry Rondon',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 5555,
// };


const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);

const accountMovementsFlat = accountMovements.flat();
console.log('Flattened movements: ', accountMovementsFlat);

const overallBalance = accountMovementsFlat.reduce((accumulator, movement) => accumulator + movement, 0);
console.log('overall balance 1: ', overallBalance);


const sumElements = (acc, mov) => acc + mov;
const overallBalance2 = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce(sumElements, 0);
console.log('overall balance 2: ', overallBalance2);


const overallBalance3 = accounts
  .flatMap(acc => acc.movements)
  .reduce(sumElements, 0);
console.log('overall balance 3: ', overallBalance3);

*/




/////////////////////////////////////////////////
// Sorting arrays

// // Strings
// const owners = ['Zelda', 'Yasmin', 'Xena', 'Carlos', 'Bob', 'Alice'];

// console.log('pre-sort: ', owners);
// console.log('sorting: ', owners.sort());
// console.log('post-sort: ', owners);


// // Numeros
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);
// console.log(movements.sort());

// // Ascendente
// // movements.sort((a, b) => {
// //   if (a >= b) return 1;
// //   if (a < b) return -1;
// // });

// movements.sort((a, b) => a - b);
// console.log(movements);

// // Descendente
// movements.sort((a, b) => b - a);
// console.log(movements);







/////////////////////////////////////////////////
// Array Grouping

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const groupedMovements =
//   Object.groupBy(movements, movement => movement > 0 ? 'deposit' : 'withdrawal');

// console.log(groupedMovements);



// const groupByActivity = Object.groupBy(accounts, account => {
//   const movementCount = account.movements.length;
//   if (movementCount >= 8) return 'very active';
//   if (movementCount >= 4) return 'active';
//   if (movementCount >= 1) return 'low activity';
//   return 'inactive';
// });
// console.log(groupByActivity);


// // const groupedByType = Object.groupBy(accounts, account => account.type);
// const groupedByType = Object.groupBy(accounts, ({ type }) => type);
// console.log(groupedByType);





/////////////////////////////////////////////////
// More Ways of Creating and Filling Arrays

// const arr = [1, 2, 3, 4, 5, 6, 7]
// console.log(arr);

// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// const alfa = new Array('alfa');
// console.log(alfa);

// const x = new Array(7);
// console.log(x);

// console.log(x.fill(1));
// // console.log(x.fill('alfa'));

// console.log(x.fill(7, 3, 5));


// // Array.from
// const onesArray = Array.from({ length: 7 }, () => 1);
// console.log(onesArray);

// const oneToSeven = Array.from({ length: 7 }, (currentElement, index) => index + 1);
// console.log(oneToSeven);

// const oneToSeven2 = Array.from({ length: 7 }, (_, i) => i + 1);

// // const oneToSeven3 = Array.from({ length: 7 }, (_, i, arr) => {
// //   // console.log(_);
// //   console.log(arr);
// //   return i + 1;
// // });

// const randomSeven = Array.from({ length: 7 }, () => Math.floor((Math.random() * 6) + 1));
// console.log(randomSeven);



// // Ejemplo con querySelectorAll

// // mal ejemplo
// labelBalance.addEventListener('click', function () {
//   const movementsUIRaw = document.querySelectorAll('.movements__value');
//   console.log(movementsUIRaw);

//   console.log([...movementsUIRaw]);

//   movementsUIRaw.map(element => element.textContent.replace('€', ''));
//   console.log(movementsUIRaw);
// });

// // buen ejemplo
// labelWelcome.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     element => Number(element.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);
// });





/////////////////////////////////////////////////
// Non destructive alternatives

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log('original movements', movements);

// const reversedMov = movements.reverse();
// console.log('reversedMov', reversedMov);
// console.log('movements', movements);

// console.log('--------------------');

// const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log('original movements 2', movements2);
// const reversedMovSlice = movements2.slice().reverse();
// console.log('reversed with slice', reversedMovSlice);
// console.log('movements 2', movements2);

// const reversedMov3 = movements2.toReversed();
// console.log('toReverse', reversedMov3);
// console.log('movements 2', movements2);

// const arr = ['A', 'B', 'C', 'D', 'E'];
// console.log('arr', arr);
// const arr2 = arr.with(2, 'XXXX');
// console.log('arr2', arr2);
// console.log('arr', arr);





/////////////////////////////////////////////////
// Arrays Methods Practice

// 1. Calcular todos los depositos de todas las cuentas

const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, mov) => sum + mov, 0);

console.log(bankDepositSum);



// 2. Contar los depositos mayores o iguales a 1000

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000)
  .length

console.log(numDeposits1000);

const numDeposits1000_2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => cur >= 1000 ? ++count : count, 0)

console.log(numDeposits1000_2);



// 3. Crear un objeto con dos propiedadaes: deposits y withdrawals, y en cada propiedad almacene la suma de todos los depositos y de todos los retiros.

const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce((sum, cur) => {
    cur > 0 ? sum.deposits += cur : sum.withdrawals += cur;
    // sum[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
    return sum
  }, { deposits: 0, withdrawals: 0 })

console.log(deposits, withdrawals);
