/* let kelvin = 294; //atribuição de 294 graus a variavel kelvin */
const kelvin=0;
let celsius = kelvin - 273; //conversão de kelvin para celsius
let fahrenheit = celsius * (9 / 5) + 32; //conversão de celsius para fahrenheit;
fahrenheit = Math.floor(fahrenheit); //round down

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton`);
