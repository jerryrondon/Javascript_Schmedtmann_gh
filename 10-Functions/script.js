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



