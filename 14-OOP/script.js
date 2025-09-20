'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // No hacer esto
  // this.calcAge = function () {
  //   return 2025 - this.birthYear;
  // };
};

const jerry = new Person('Jerry', 1979);
console.log(jerry);

console.log(jerry instanceof Person); // true



// Prototipos

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  return 2025 - this.birthYear;
};

console.log(jerry.calcAge());

console.log(Person.prototype);

console.log(jerry);

console.log(jerry.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jerry));

console.log(Person.prototype.isPrototypeOf(Person));

console.log(Object.prototype.isPrototypeOf(Person));


Person.prototype.species = 'Homo Sapiens';
console.log(jerry.species);


console.log(jerry.hasOwnProperty('firstName'));
console.log(jerry.hasOwnProperty('species'));

console.log(Person.prototype.hasOwnProperty('species'));


///////////////////////

console.log('constructor:', Person.prototype.constructor === Person);



///////////////////////////////////////
// Prototypal Inheritance on Built-In Objects

// jerry.__proto__ === Person.prototype
console.log(jerry.__proto__);

// Objeto
console.log(jerry.__proto__.__proto__);

// El padre de Object es null
console.log(jerry.__proto__.__proto__.__proto__); // null


console.dir(Person.prototype.constructor);

const array = [9, 6, 4, 6, 4, 9, 76];
console.log(array);

console.log(array.__proto__); // constructor: Array
console.log(array.__proto__ === Array.prototype); // true

console.log(array.__proto__.__proto__); // constructor: Object


Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(array.unique());

const h1 = document.querySelector('h1');
console.dir(h1);


console.dir(x => x + 1);

