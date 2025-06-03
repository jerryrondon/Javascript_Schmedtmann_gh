'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
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
};

///////////////////////////////////////////////////
// Destructuring Objects

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

