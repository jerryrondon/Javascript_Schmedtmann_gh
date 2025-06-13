'use strict';



// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainCourseIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainCourseIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
    fri: {
      open: 11,
      close: 23,
    },
  },
  orderDelivery: function ({
    starterIndex,
    mainIndex,
    time,
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(`Main ingredient: ${mainIngredient}`);
    console.log(`Other ingredients: ${otherIngredients}`);
    console.log(otherIngredients);
  }
};

///////////////////////////////////////////////////
// String Methods Practice

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [status, origin, destination, time] = flight.split(';');
  const output = `${status.includes('Delayed') ? '🔴 ' : ''}${status.replaceAll('_', ' ').trim()} from ${origin.slice(0, 3).toUpperCase()} to ${getCode(destination)} (${time.replace(':', 'h')})`.padStart(45, ' ');
  console.log(output);
}


///////////////////////////////////////////////////
// Working With Strings - Part 3
/*
console.log('a+very+long+string'.split('+'));
console.log('Jerry Rondon Lozada'.split(' '));

const [firstName, lastName] = 'Jerry Rondón'.split(' ');
console.log(firstName);
console.log(lastName);

const joinedString = ['Mr.', 'Jerry', 'Rondon'].join('-');
console.log(joinedString); // imprime Mr.-Jerry-Rondon


// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '=').padEnd(30, '+'));


// Mask credit Card
const maskCreditCard = function (number) {
  // const str = number + ''; // Convierte el número a un string
  const str = String(number);
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}

console.log(maskCreditCard(3249283968349286));
console.log(maskCreditCard('907345097543'));
console.log(maskCreditCard(349286));


// Repeat
const message2 = 'mensaje a repetir!! '
console.log(message2.repeat(4));

*/



///////////////////////////////////////////////////
// Working With Strings - Part 2
/*
const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());


// Fix capitalization
const passenger = 'jERRY';
console.log(passenger);
const passengerLowerCase = passenger.toLowerCase();
const passengerCorrect = passengerLowerCase[0].toUpperCase() + passengerLowerCase.slice(1);
console.log(passengerCorrect);


// comparar emails
const email = 'hello@jonas.io';
const email2 = '  hello@jonas.io  \t \n '

const normalizedEmail = email2.toLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail);


// replacing parts of the string
const priceGB = '288,97£'
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceGB);
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));



// regular expressions
console.log(announcement.replace(/door/g, 'gate'));



// Booleans
const plane = 'A320neo';

console.log(plane.includes('A320')); // true
console.log(plane.startsWith('Air')); // false
console.log(airline.startsWith('TAP')); // true

console.log(plane.endsWith('neo')); // true


*/



///////////////////////////////////////////////////
// Working With Strings - Part 1
/*
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); // imprime A
console.log(plane[1]); // imprime 3
console.log(plane[2]); // imprime 2

console.log('B737'[0]); // imprime B
console.log(airline.length);
console.log('B737'.length);


console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));
console.log(airline.indexOf('portugal'));


console.log(airline.slice(4, 7)); // imprime Air
console.log(airline.slice(4)); // imprime Air Portugal

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));


const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  console.log(s);
  if (s === 'B' || s === 'E') console.log('This is a middle seat');
  else console.log('You got lucky!');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Jerry'));
console.log(typeof new String('Jerry'));
console.log(new String('Jerry').slice(0, 3));
console.log(typeof new String('Jerry').slice(0, 3));

*/





///////////////////////////////////////////////////
// Maps: Iteration
/*
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!!'],
  [false, 'Try again']
]);

console.log(question);

console.log(Object.entries(restaurant.openingHours));

// Convert object to map
const openingHoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(openingHoursMap);

// Iteration
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof (key) === 'number') console.log(`${key}: ${value}`)
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);
console.log(question.get(question.get('correct') === answer));


// Convert map to array
console.log([...question]);

console.log(question.keys());
console.log(question.values());

console.log(question.entries());
console.log([...question.entries()]);
console.log([...question]);
*/





///////////////////////////////////////////////////
// Maps: fundamentals
/*
const restaurantMap = new Map();

restaurantMap.set('name', 'Classico Italiano');
restaurantMap.set(1, 'Caricuao, Venezuela');
restaurantMap.set(2, 'Florencia, Italia');

console.log(restaurantMap);

restaurantMap
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open!!')
  .set(false, 'We are closed');

console.log(restaurantMap);

console.log(restaurantMap.get('name'));
console.log(restaurantMap.get(1));
console.log(restaurantMap.get(true));


const time = 10;
// const time = 21;
console.log('Time: ', time);
console.log(restaurantMap.get(time >= restaurantMap.get('open') && time <= restaurantMap.get('close')));

console.log('-- has --');
console.log(restaurantMap.has('categories'));
console.log(restaurantMap.has('owner'));

console.log('-- delete --');
console.log(restaurantMap.delete(2));
console.log(restaurantMap);

restaurantMap.set([1, 2], 'Test');
console.log(restaurantMap);
console.log(restaurantMap.get([1, 2]));

const arr = [2, 3];
restaurantMap.set(arr, 'Test');
console.log(restaurantMap);
console.log(restaurantMap.get(arr));

restaurantMap.set(document.querySelector('h1'), 'Heading');
console.log(restaurantMap);
*/



///////////////////////////////////////////////////
// New Operations of Sets
/*
const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);


const commonFoods = italianFoods.intersection(mexicanFoods);
console.log(commonFoods);

const unionFoods = italianFoods.union(mexicanFoods);
console.log(unionFoods);

const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log(uniqueItalianFoods);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log(uniqueMexicanFoods);

const symmetricDifferenceFoods = italianFoods.symmetricDifference(mexicanFoods);
console.log(symmetricDifferenceFoods);

console.log(italianFoods.isDisjointFrom(mexicanFoods));
*/




///////////////////////////////////////////////////
// Sets
/*
const exampleSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Rissoto', 'Pasta', 'Pizza']);
console.log(exampleSet);

console.log(new Set('Jerry'));

console.log(exampleSet.size);

console.log(exampleSet.has('Pizza'));
console.log(exampleSet.has('Bread'));

exampleSet.add('Garlic Bread');
exampleSet.add('Garlic Bread');
console.log(exampleSet);

let temp = exampleSet.delete('Rissoto');
console.log(temp);
console.log(exampleSet);

temp = exampleSet.delete('Bread');
console.log(temp);

// exampleSet.clear();
// console.log(exampleSet);

for (const item of exampleSet) console.log(item);

console.log(exampleSet.entries());


// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffSet = new Set(staff);
console.log(staff);
console.log(staffSet);

const uniqueStaff = [...staffSet];
console.log(uniqueStaff);


console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);
*/



///////////////////////////////////////////////////
// Looping through objects
/*
// Keys
const properties = Object.keys(restaurant.openingHours);
console.log(properties);

const restaurantKeys = Object.keys(restaurant);
console.log(restaurantKeys);


// Values
const values = Object.values(restaurant.openingHours);
console.log(values);

const restaurantValues = Object.values(restaurant);
console.log(restaurantValues);


// Entries
const entries = Object.entries(restaurant.openingHours);
console.log('Entries: ', entries);

const restaurantEntries = Object.entries(restaurant);
console.log(restaurantEntries);


// Looping
for (const [day, { open: openTime, close: closeTime }] of entries) {
  console.log(`On ${day} we open at ${openTime} and close at ${closeTime}`);
}

*/


///////////////////////////////////////////////////
// Optional Chaining
/*
console.log(restaurant.openingHours.fri.open);

console.log(restaurant.openingHours.mon);

// console.log(restaurant.openingHours.mon.open);

console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open ?? 'No hay información');
console.log(restaurant.openingHours?.sat?.open ?? 'No hay información');


console.log(restaurant.order?.(2, 2) ?? 'El método no existe');
console.log(restaurant.orderArepa?.(0, 1) ?? 'El método no existe');

// console.log(restaurant.orderArepa(0, 1));


const users = [
  { name: 'Jonas', username: 'jonas' },
  { name: 'Jerry', username: 'jrondon' },
  { name: 'Karina', username: 'kmoreno' }
];

console.log(users[0]?.name ?? 'Arreglo vacío');

const emptyArray = [];
console.log(emptyArray[0]?.something ?? 'Arreglo vacío');
*/



///////////////////////////////////////////////////
// for-of Loop

/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log(item);
}

console.log('--- Menú del día ---');
for (const [index, element] of menu.entries()) {
  console.log(`${index + 1}: ${element}`);
}

console.log(menu.entries());
console.log([...menu.entries()]);
*/


///////////////////////////////////////////////////
// Logical Assignment Operators
/*
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'Capri',
  owner: 'Giussepe Letrina',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;


rest1.numGuests ??= 10;
rest2.numGuests ??= 10;


console.log(rest1.numGuests);
console.log(rest2.numGuests);

// rest1.owner = rest1.owner && 'ANONIMO';
// rest2.owner = rest2.owner && 'ANONIMO';

rest1.owner &&= 'ANONIMO';
rest2.owner &&= 'ANONIMO';

console.log(rest1);
console.log(rest2);
*/



///////////////////////////////////////////////////
// Nullish Coalescing Operator
/*
restaurant.numGuests = 0
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

const guests = restaurant.numGuests ?? 10;
console.log(guests);
*/




///////////////////////////////////////////////////
// Short Circuiting
/*
console.log(1 || 'Lo que sea');

console.log(undefined || 'String no vacío');
console.log('String vacío', undefined || '');
console.log('' || undefined);
console.log(undefined || null);

console.log('' && undefined);
console.log(undefined && '');


restaurant.numGuests = 23
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

if (restaurant.orderPizza) {
  restaurant.orderPizza('Mushrooms', 'Pepperoni');
}

restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'Pepperoni');
*/

///////////////////////////////////////////////////
// Rest Pattern and Parameters

/*
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log([...restaurant.mainMenu, ...restaurant.starterMenu]);
console.log(pizza, risotto, otherFood);


// Objetos
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
console.log(sat);


// Funciones
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0, l = numbers.length; i < l; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(8, 2);
add(4, 7, 8, -2, 4, 3, -9);

const x = [3, 5, 8];
add(...x);

restaurant.orderPizza('Pepperoni', 'Olives', 'Korn', 'Salami');
*/




///////////////////////////////////////////////////
// Spread Operator
/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const goodNewArr = [1, 2, ...arr];
console.log(goodNewArr);

console.log(...arr);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join arrays
const conjoinedArray = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(conjoinedArray);

// Iterables
const exampleString = 'Jerry';
console.log(...exampleString);
// Es equivalente a:
console.log('J', 'e', 'r', 'r', 'y');

// Objetos
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Vista Arroyo';
restaurantCopy.mainMenu.push('Gnocchi')
console.log(restaurant.name);
console.log(restaurantCopy.name);
console.log(restaurant.mainMenu);
console.log(restaurantCopy.mainMenu);


const extendedRestaurant = { foundedIn: 1980, ...restaurant, founder: 'Giovani Letrina' }
console.log(extendedRestaurant);
/*




///////////////////////////////////////////////////
// Destructuring Objects
/*
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: workingHours,
  categories: tags
} = restaurant;
console.log(restaurantName, workingHours, tags);


// Mutating variables
let a = 10;
let b = 11;
const object = { a: 23, b: 7, c: 14 };
// { a, b } = object;

({ a, b } = object);
console.log(a, b);


// Objetos anidados
const { openingHours: { fri: { open, close } } } = restaurant;
console.log(open, close);

const { openingHours: { fri: { open: dayStart, close: dayEnd } } } = restaurant;
console.log(dayStart, dayEnd);


const { openingHours: { fri: fridayHours } } = restaurant;
console.log(fridayHours);

console.log(typeof (restaurant.openingHours.fri));


// Default values
const { openingHours: { fri: { open: dayStart2, close: dayEnd2, totalHours: totalHours2 = 7 } } } = restaurant;
console.log(dayStart2, dayEnd2, totalHours2);


// Objetos como parámetros de funciones
restaurant.orderDelivery({
  time: '22:30',
  address: 'Sector Carpinterom, Calle Real, Nro 1',
  mainIndex: 1,
  starterIndex: 3,
});
*/


///////////////////////////////////////////////////
// Destructuring Arrays
/*
const arreglo = [2, 3, 4, 5];
const a = arreglo[0];
const b = arreglo[1];
const c = arreglo[2];
const d = arreglo[3];

let [w, x, y, z] = arreglo;
x = 10;
console.log(w, x, y, z);
console.log(arreglo);

const [firstA, second] = restaurant.categories;
console.log(firstA, second);

const [firstB, , third] = restaurant.categories;
console.log(firstB, third);


// Intercambiar variables
let [main, secondary] = restaurant.categories;
console.log('Main: ', main, ' Secondary: ', secondary);

[main, secondary] = [secondary, main];
console.log('Main: ', main, ' Secondary: ', secondary);


// Deconstructing function outputs
console.log(restaurant.order(2, 0));
const [starterCourse, mainCourse] = restaurant.order(2, 0);
console.log('Starter: ', starterCourse);
console.log('Main: ', mainCourse);


// Arreglos anidados
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);


// Default values
const [p, q, r] = [8, 9];
console.log(p, q, r);

const [p2 = 1, q2 = 1, r2 = 1] = [8, 9];
console.log(p2, q2, r2);
*/

