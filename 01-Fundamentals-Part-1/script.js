
/*
js = 'amazing';


console.log(33 + 25 + 62);

let firstName = "Jerry";
console.log(firstName);

let lastName = "Rondon";
console.log(lastName + " " + firstName);

let country = "Venezuela";
let continent = "America";
let countryPopulation = 30000000;

console.log("My country is: " + country + ", and is located in the continent of " + continent + ". Contains a population of " + countryPopulation + " of habitants.")



let isJavascriptFun = true;

console.log(typeof 23);
console.log(typeof true);
console.log(typeof isJavascriptFun);

isJavascriptFun = 'Yes!';
console.log(typeof isJavascriptFun);

let undefineVariable;
console.log(typeof undefineVariable);

undefineVariable = 1999;
console.log(typeof undefineVariable);

console.log(typeof null);


*/


/*

/////////////////////////////////
// Challenge #1

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log("Mark BMI: ", BMIMark);
console.log("John BMI: ", BMIJohn);

let markHigherBMI = false;
if (BMIMark > BMIJohn) markHigherBMI = true;
console.log("Is Mark's BMI higher: ", markHigherBMI);

*/


////////////////////////////
// Template literals

/*
const firstName = 'Jerry';
const job = 'developer';
const birthYear = 1980;
const currentYear = 2025;

const sentence = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' years old ' + job + '!';
console.log(sentence);

const sentence2 = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}!`;
console.log(sentence2);
*/



/////////////////////////////////
// Challenge #2
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log("Mark BMI: ", BMIMark);
console.log("John BMI: ", BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
*/



/////////////////////////////////
// type conversion and coercion
/*
const inputYear = '1990';
console.log(inputYear + 18);

console.log(Number(inputYear) + 18);

console.log(Number('string'));

console.log("23" - 10 - "3");

console.log("23" * "3");

console.log("69" / "3");

console.log("2" ** "3");

console.log(1 + 2 + 3 + '4');
*/



/////////////////////////////////
// truthy and falsy values
console.log(Boolean(0));
console.log(Boolean(5));
console.log(Boolean(''));
console.log(Boolean('Jerry'));
console.log(Boolean({}));

