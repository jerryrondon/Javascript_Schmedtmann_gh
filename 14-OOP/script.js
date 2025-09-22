'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // No hacer esto
//   // this.calcAge = function () {
//   //   return 2025 - this.birthYear;
//   // };
// };

// const jerry = new Person('Jerry', 1979);
// console.log(jerry);

// console.log(jerry instanceof Person); // true



// // Prototipos

// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   return 2025 - this.birthYear;
// };

// console.log(jerry.calcAge());

// console.log(Person.prototype);

// console.log(jerry);

// console.log(jerry.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jerry));

// console.log(Person.prototype.isPrototypeOf(Person));

// console.log(Object.prototype.isPrototypeOf(Person));


// Person.prototype.species = 'Homo Sapiens';
// console.log(jerry.species);


// console.log(jerry.hasOwnProperty('firstName'));
// console.log(jerry.hasOwnProperty('species'));

// console.log(Person.prototype.hasOwnProperty('species'));


///////////////////////

// console.log('constructor:', Person.prototype.constructor === Person);



///////////////////////////////////////
// Prototypal Inheritance on Built-In Objects

// // jerry.__proto__ === Person.prototype
// console.log(jerry.__proto__);

// // Objeto
// console.log(jerry.__proto__.__proto__);

// // El padre de Object es null
// console.log(jerry.__proto__.__proto__.__proto__); // null


// console.dir(Person.prototype.constructor);

// const array = [9, 6, 4, 6, 4, 9, 76];
// console.log(array);

// console.log(array.__proto__); // constructor: Array
// console.log(array.__proto__ === Array.prototype); // true

// console.log(array.__proto__.__proto__); // constructor: Object


// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(array.unique());

// const h1 = document.querySelector('h1');
// console.dir(h1);


// console.dir(x => x + 1);




///////////////////////////////////////
// Coding Challenge #1

/*
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/


// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   console.log(this.speed += 10);
// };

// Car.prototype.brake = function () {
//   console.log(this.speed -= 5);
// };


// const beamer = new Car('BMW', 120);
// const mercedes = new Car('Mercedes Benz', 95);

// console.log(beamer);
// console.log(mercedes);

// beamer.accelerate();
// beamer.brake();

// mercedes.accelerate();
// mercedes.brake();





///////////////////////////////////////
// ES6 Classes

// class expression
// const PersonClass = class {}

class PersonClass {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2025 - this.birthYear);
  }
  greet = function () {
    console.log(`Hey ${this.firstName}!`);
  }
};

const jerry = new PersonClass('jerry', 1979);
jerry.calcAge();

console.log(jerry.__proto__ === PersonClass.prototype); // true

// PersonClass.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}!`);
// };

jerry.greet(); // Hey jerry!