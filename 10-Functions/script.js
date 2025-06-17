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

