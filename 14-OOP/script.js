'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // No hacer esto
  this.calcAge = function () {
    return 2025 - this.birthYear;
  };
};

const jerry = new Person('Jerry', 1979);
console.log(jerry);

console.log(jerry instanceof Person);
console.log(jerry.calcAge());
