/* STEP 2*/
let newYearsResolutions = ['Run a marathon', 'Learn a new language', 'Read 52 books'];

console.log(newYearsResolutions);

/* STEP 3*/
let newYearsResolutions = ['Run a marathon', 'Learn a new language', 'Read 52 books'];

let listItem = newYearsResolutions[0];
console.log(listItem);

console.log(newYearsResolutions[2]);
console.log(newYearsResolutions[3]);

/* STEP 4*/
let newYearsResolutions = ['Run a marathon', 'Learn a new language', 'Read 52 books'];

newYearsResolutions[1] = 'Learn a new language';

/* STEP 5*/
console.log(newYearsResolutions.length);

/* STEP 6*/
let newYearsResolutions = ['Run a marathon', 'Learn a new language', 'Read 52 books'];

newYearsResolutions[1] = 'Learn a new language';
newYearsResolutions.push('Read more','Try again');
newYearsResolutions.pop();
console.log(newYearsResolutions.length);
console.log(newYearsResolutions);

/* STEP 7*/
let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();

groceryList.unshift('popcorn');
console.log(groceryList);

console.log(groceryList.slice(1, 4));
console.log(groceryList);

/* STEP 8*/
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments.push('Mayo');
condiments = ['Sriracha'];
console.log(condiments);
utensils.pop();
utensils = ['Spork'];
