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







