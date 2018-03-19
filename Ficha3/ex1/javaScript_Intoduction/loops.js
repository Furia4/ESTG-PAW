/* STEP 2*/
let vacationSpots = ['New York', 'Washington', 'Chicago'];

console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

/* STEP 3*/
let vacationSpots = ['New York', 'Washington', 'Chicago'];

for(let vacationSpotIndex = 0; vacationSpotIndex < vacationSpots.length; vacationSpotIndex++){
  console.log("I would love to visit "+vacationSpots[vacationSpotIndex]);
}

/* STEP 4*/
let vacationSpots = ['New York', 'Washington', 'Chicago'];

for(let vacationSpotIndex = vacationSpots.length - 1; vacationSpotIndex >= 0; vacationSpotIndex--){
  console.log("I would love to visit "+vacationSpots[vacationSpotIndex]);
}

/* STEP 5*/
let myPlaces = ['Houston', 'Sioux Falls', 'Phoenix'];

let friendPlaces = ['Sioux Falls', 'Missoula', 'Buffalo'];

for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++) {
  for (let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++) {
		if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]) {
      console.log(friendPlaces[friendPlacesIndex]);
    }
  }
}

/* STEP 6*/
let cards = ['Diamond', 'Spade', 'Heart', 'Club'];

let currentCard = 'Heart';

while (currentCard !== 'Spade') {
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random() *4)];
}

console.log('You found a spade!');

/* STEP 7*/

