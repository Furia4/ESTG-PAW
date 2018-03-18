const satellite='The Moon';
const galaxy='The Milky Way';
let stars='North Star';

const myNightSky=() =>{
  return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
}
console.log(myNightSky());

/* -- STEP 3 -- */
const satellite = 'The Moon';
const galaxy = 'The Milky Way';

let stars = 'North Star';

const myNightSky = () => {
  stars = 'Sirius';
  return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(myNightSky());
console.log(stars);

/* ERRO NO SCOPE */
const visibleLightWaves = () => {
  let lightWaves = 'Moonlight';
  console.log(lightWaves);
};

visibleLightWaves();
console.log(lightWaves);

/* --- STEP 5 ---*/
const visibleLightWaves = () => {
  let lightWaves = 'Moonlight';
  let region='The Arctic';
  if(region === 'The Arctic'){
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  }
  console.log(lightWaves);
};

visibleLightWaves();

/* --- STEP 6 ---*/
const starCount=()=>{
  let i=5;
  for(i=0;i<12;i++){
    console.log(i);
  }
  console.log(i);
}
starCount();
console.log(i);//ERRO
