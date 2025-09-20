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