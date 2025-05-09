'use strict';


/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; // Notar que falta una s (hasDriver-s-License)
if (hasDriversLicense) console.log('I can drive');
*/




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

