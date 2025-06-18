'use strict';

//////////////////////////////////////////
// Default Parameters
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers,
) {
  // numPassengers = numPassengers ?? 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};


createBooking('LH123');
createBooking('LH123', 2);

// createBooking('LH123', , 300);
createBooking('LH123', undefined, 300);
*/




//////////////////////////////////////////
// Passing Arguments
/*
const flight = 'LH123';
const passenger = {
  passengerName: 'Jerry Rondon',
  passport: 2734097324079035,
}

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.passengerName = 'Mr. ' + passenger.passengerName;

  if (passenger.passport === 2734097324079035) {
    alert('Checked In!');
  } else {
    alert('Wrong Passport');
  }
};

checkIn(flight, passenger);
console.log(flight);
console.log(passenger);
*/


//////////////////////////////////////////
// Functions Accepting Callback Functions

/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
}


const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
}

transformer('Javascritp is the best!', upperFirstWord);
transformer('JaVasCritp is the best!', upperFirstWord);
transformer('JaVasCritp is the best!', oneWord);


const high5 = function (element) {
  console.log('👋', element);
}
const array = ['Jerry', 'Alice', 'Bob'];

array.forEach(high5);
*/




//////////////////////////////////////////
// Functions Returning Functions
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}!`);
  }
}

const greeterHey = greet('Hey');

greeterHey('Jerry');
greeterHey('Alice');

greet('Hello')('Jerry');


const greet2 = (greeting) => (name) => console.log(`${greeting} ${name}!`);

const greeterAye = greet2('Aye');

greeterAye('Jerry');
greeterAye('Alice');
greet2('Hallo')('Jerry');
*/



//////////////////////////////////////////
// The call and apply Methods
/*
const book = function (flightNum, name) {
  console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
  this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })
};


const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book,
};


lufthansa.book(345, 'Jerry');
lufthansa.book(123, 'Larry');
console.log(lufthansa.bookings);



const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};


book.call(swiss, 239, 'Mona Lisa Vito');
console.log(swiss);

book.apply(lufthansa, [117, 'Vinny Gambini']);
console.log(lufthansa);


// bind
const bookSW = book.bind(swiss);

bookSW(665, 'Ralph Macchio');
console.log(swiss);

// swiss.bookSW(667, 'Fred Gwynne')



// Objects with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
}

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));



// Partial application
const addTax = (rate, value) => (1 + rate) * value;

console.log(addTax(0.10, 300));

const addIVA = addTax.bind(null, 0.16);
console.log(addIVA(300));

const addTaxGenerator = (rate) => (value) => (1 + rate) * value;
const addVAT = addTaxGenerator(0.23);
console.log(addVAT(100));
*/





//////////////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)
/*
// IIFE
(function () {
  console.log('Este texto sólo se muestra una vez');
})();



(() => console.log('Este texto también se muestra una vez'))();
*/






//////////////////////////////////////////
// Closures
/*
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }
}

const booker = secureBooking();

booker();
booker();
booker();


console.dir(booker);
*/



//////////////////////////////////////////
// Closures Examples

// Ejemplo 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

g();
f();



const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
}

// h reasigna el valor de f
h();
f();

console.dir(f);




// Ejemplo 2
// const fun = function () {
//   // console.log(`We are boarding ${n} passengers`);
//   console.log(`There are 3 groups, each with ${perGroup} passengers`);
// };

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  const fun = function () {
    console.log(`We are boarding ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  };
  setTimeout(fun, wait * 1000);
};

const perGroup = 1000;
boardPassengers(180, 2);





