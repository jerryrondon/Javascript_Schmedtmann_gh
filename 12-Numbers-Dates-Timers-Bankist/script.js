'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1
      } ${type}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]
      }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


/////////////////////////////////////////////////
// Converting and Checking Numbers

// console.log(0.1 + 0.2);

// console.log(0.1 + 0.2 === 0.3);

// console.log(Number('44'));
// console.log(1 + '33');
// console.log(+'33');

// // Parsing
// console.log(Number.parseInt('35px'));
// console.log(Number.parseInt('ex67'));

// console.log(Number.parseInt('35pxex67'));

// console.log(Number.parseInt('35px', 10));
// console.log(Number.parseInt('1011', 2));
// console.log(Number.parseInt('FF', 16));


// console.log(Number.parseInt('2.5rem', 10));
// console.log(Number.parseFloat('2.5rem', 10));

// console.log('número', Number.isNaN(20));
// console.log('string', Number.isNaN('20'));

// console.log('NaN', Number.isNaN(+'20X'));
// console.log('infinity', Number.isNaN(23 / 0));

// // Verifica si el valor es un número
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite(+'20X'));
// console.log(Number.isFinite(23 / 0));

// // Verifica si el valor es entero
// console.log(Number.isInteger(17));
// console.log(Number.isInteger('20'));
// console.log(Number.isInteger(+'55X'));
// console.log(Number.isInteger(23 / 0));






/////////////////////////////////////////////////
// Math and Rounding

// console.log(Math.sqrt(169));
// console.log(196 ** (1 / 2));

// console.log(27 ** (1 / 3));
// console.log(512 ** (1 / 3));


// // Máximo y mínimo
// console.log(Math.max(1, 2, 3, '4', 5, 6, '7'));
// console.log(Math.min('1', 2, 3, '4', 5, 6, 7));
// console.log(Math.min('1', 2, 3, '4', 5, 6, 7, '23px'));

// // Constantes
// console.log(Math.E);
// console.log(Math.PI);


// // Rounding to integers
// console.log(Math.trunc(10.2));

// console.log(Math.round(11.2));
// console.log(Math.round(11.5));

// console.log(Math.ceil(12.2));
// console.log(Math.ceil(12.8));

// console.log(Math.floor(19.2));
// console.log(Math.floor(19.999));


// // Rounding decimal places
// console.log((2.75).toFixed(0));
// console.log((2.75).toFixed(3));

// console.log((3.428).toFixed(2));
// console.log(+(3.428).toFixed(2));






/////////////////////////////////////////////////
// The Remainder Operator

// console.log(5 % 2); // 2 * 2 + (resto)1 = 5


// const isEven = n => n % 2 === 0;

// console.log(isEven(8));
// console.log(isEven(11));
// console.log(isEven(1091));







/////////////////////////////////////////////////
// Numeric Separators

// const x = 2345670000000
// const x2 = 2_345_670_000_000

// console.log(x2);

// const price = 105_99;
// console.log(price);

// console.log(Number('230_000'));
// console.log(parseInt('230_000'));

// // const PI = 3._1415 // Error





/////////////////////////////////////////////////
// Working with BigInt

// console.log(2 ** 53 - 1);
// console.log(2 ** 53);
// console.log(2 ** 53) + 10;

// console.log('Max safe integer', Number.MAX_SAFE_INTEGER);


// console.log(123456789012345678901234567890);
// console.log(123456789012345678901234567890n);

// console.log(BigInt(123456789012345678901234567890));


// const huge = 123456789012345678901234567890n;
// const num = 100;
// console.log(huge * BigInt(num));

// console.log(typeof 20n);
// console.log(20 == 20n);
// console.log(20 === 20n);


// console.log(huge + ' big int'); // 123456789012345678901234567890 big int


// console.log(12n / 3n);
// console.log(13n / 3n);
// console.log(15n / 3n);
// console.log(-12n / 3n);
// console.log(-13n / 3n);






/////////////////////////////////////////////////
// Creating Dates

// // Crear fecha
// const now = new Date();
// console.log(now);

// console.log(new Date('Jul 16 2025 10:10:10'));
// console.log(new Date('May 1, 2016'));
// console.log(new Date('May 2, 2016'));


// console.log(account1.movementsDates[0]);
// console.log(new Date(account1.movementsDates[0]));

// console.log(new Date(2037, 3, 1, 14, 59, 30, 492));

// // Epoch
// const epoch = new Date(0);
// console.log(epoch.toUTCString());
// console.log(new Date(0));


// Metodos
const future = new Date(2037, 10, 19, 15, 23, 12, 399);
console.log(future);
console.log(future.toUTCString());
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.getMilliseconds());
console.log(future.toISOString());
console.log(future.toUTCString());
console.log(future.getTime());

console.log(Date.now());

future.setFullYear(2040)
console.log(future);



