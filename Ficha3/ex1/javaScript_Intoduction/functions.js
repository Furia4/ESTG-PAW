const takeOrder = (topping) =>{
  console.log("Order: pizza topped with "+topping);
};
takeOrder('chicken');

/* --- Other --- */
const takeOrder = (topping, crustType) => {
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('chicken', 'bacon');
takeOrder('tomate', 'fish');
takeOrder('pepperoni', 'bacon');

/* ---Other --- */
let orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount++;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('chicken', 'bacon');
takeOrder('tomate', 'fish');
takeOrder('pepperoni', 'bacon');

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};

console.log(getSubTotal(orderCount));

/*--- Other---*/
let orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount++;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('chicken', 'bacon');
takeOrder('tomate', 'fish');
takeOrder('pepperoni', 'bacon');

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};

const getTax = () => {
 return getSubTotal(orderCount) * 0.06; 
};

const getTotal = () => {
  return getSubTotal(orderCount) + getTax(); 
}; 

console.log(getSubTotal(orderCount));
console.log(getTotal());

/* --- Order --- */
function isGreaterThan(numberOne,numberTwo){
  if(numberOne > numberTwo){
    return true;
  }
  else{
    return false;
  }
}
isGreaterThan(10,5);

/* --- Next ---*/
const isGreaterThan = (numberOne,numberTwo) =>{
  if(numberOne > numberTwo){
    return true;
  }
  else{
    return false;
  }
}
isGreaterThan(10,5);

/* ---Other---*/
const volumeOfSphere = diameter => ((1/6) * Math.PI * diameter * diameter * diameter);

console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters');
