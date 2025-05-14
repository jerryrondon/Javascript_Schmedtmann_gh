'use strict';


/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; // Notar que falta una s (hasDriver-s-License)
if (hasDriversLicense) console.log('I can drive');
*/


///////////////////////////////////////
// Functions
/*
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} and ${oranges} oranges.`;
  return juice;
}

fruitProcessor(5, 0);


const applejuice = fruitProcessor(5, 0);
console.log(applejuice);
// o también
console.log(fruitProcessor(2, 4));
*/



///////////////////////////////////////
// Function Declaration vs Expressions
/*
function calcAge1(birthYear) {
  return 2025 - birthYear;
}

const age1 = calcAge1(1980);


const calcAge2 = function (birthYear) {
  return 2025 - birthYear;
}

const age2 = calcAge2(1988);
*/

///////////////////////////////////////
// Arrow functions
/*
const calcAge3 = birthYear => 2025 - birthYear;
const age3 = calcAge3(1982);

console.log(age3);


const yearsUntilRetirement = birthYear => {
  const age = 2025 - birthYear;
  const retirement = 65 - age;
  return retirement;
}

console.log(yearsUntilRetirement(1980));


// Usando varios argumentos
const yearsUntilRetirement2 = (birthYear, retirementAge) => {
  const age = 2025 - birthYear;
  return retirementAge - age;
}

console.log(yearsUntilRetirement2(1980, 71));


// Usando varios argumentos
const yearsUntilRetirement3 = (birthYear, retirementAge) => retirementAge - 2025 + birthYear;

console.log(yearsUntilRetirement3(1980, 72));
*/





///////////////////////////////////////
// Arrays
/*
const friends = ['Karina', 'Robert', 'Luis', 'Carlos'];
console.log(friends);


const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends.length);

console.log(friends[friends.length - 1]); // Tomar el ultimo elemento.

friends[2] = 'Romel';
console.log(friends);

const secondArrya = ['String', 25, ["another array", "hello"]];
console.log(secondArrya);
*/





///////////////////////////////////////
// Array methods
/*
const friends = ['Karina', 'Robert', 'Luis', 'Carlos'];
friends.push('William');

console.log(friends);

friends.unshift('Jerry');
console.log(friends);

console.log(friends.pop());
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Karina'));
console.log(friends.indexOf('No existe en el arreglo'));

friends.push('Karina');
console.log(friends);
console.log(friends.indexOf('Karina'));

console.log("includes")
console.log(friends.includes('Karina'));
console.log(friends.includes('Bob'));
friends.push(23);
console.log(friends.includes('23'));
*/




///////////////////////////////////////
// Intro to Objects
/*
const jerry = {
  firstName: 'Jerry',
  lastName: 'Rondon',
  age: 2025 - 1980,
  friends: ['Karina', 'Luis', 'Robert']
}

console.log(jerry);

console.log(jerry.lastName);


const auditLogs = {
  audit_20250511: 'something',
  audit_20250512: 'something',
  audit_20250513: 'some information',
  audit_20250514: 'something else'
}

const fecha = '20250513';
const searchKeyword = 'audit_';
console.log(auditLogs[searchKeyword + fecha]);

const interestedIn = prompt('Indique qué desea saber. Seleccionar firstName, lasName, age o friends');
console.log(interestedIn);
console.log(jerry[interestedIn]);

*/



///////////////////////////////////////
// Object Methods
/*
const jerry = {
  firstName: 'Jerry',
  lastName: 'Rondon',
  birthYear: 1980,
  friends: ['Karina', 'Luis', 'Robert'],
  job: 'Ingeniero Informático',
  hasDriversLicense: true,
  calcAge: function () {
    // console.log(this);
    return 2025 - this.birthYear;
  },
  getSummary: function (isExtendedSummary) {
    return `${this.firstName} tiene ${this.calcAge()} años y es ${this.job} de profesión. ${this.hasDriversLicense ? 'Cuenta con licencia de conducir' : 'No posee licencia de conducir'} y piensa que ${this.friends[0]} es uno de sus mejores amigos.${isExtendedSummary ? ` Nació en el año ${this.birthYear}.` : ''}`;
  }
}

console.log(jerry.calcAge());
console.log(jerry['calcAge']());

console.log(jerry.getSummary(true));
console.log(jerry.getSummary());
console.log(jerry.getSummary(false));
*/




///////////////////////////////////////
// Object Methods

// for (let repetition = 1; repetition <= 10; repetition++) {
//   console.log(`Imprimiendo repetición Nro ${repetition}`)
// }

/*
const jerry = [
  'Jerry',
  'Rondon',
  2025 - 1980,
  'Ingeniero',
  ['Karina', 'Luis', 'Robert']
]

console.log(jerry);

for (let i = 0; i < jerry.length; i++) {
  console.log(jerry[i], typeof jerry[i]);
}


const years = [1988, 1980, 1969, 2007];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2025 - years[i]);
}
console.log(years, ages);

*/





///////////////////////////////////////
// while loop


const repeticiones = 10;
let intentos = 0;
let dice = 0;
let sum = 0;

for (let i = 1; i <= repeticiones; i++) {
  dice = 0;
  intentos = 0;
  if (repeticiones <= 20) console.log(`Repetition: ${i}`);
  while (dice !== 6) {
    intentos++;
    dice = Math.trunc(Math.random() * 6 + 1);
    if (repeticiones <= 20) console.log(`dado: ${dice}`);
    if (dice === 6 && repeticiones <= 20) console.log(`intentos: ${intentos}`);
  }
  sum += intentos;
}

console.log(`Promedio de intentos: ${sum / repeticiones}`);








