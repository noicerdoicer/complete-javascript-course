
//L1 Values and Variables

let country = "Deutschland";
const continent = "Europa";
let population = 81000000;

console.log("L1 Values and Variables");
console.log(country, continent, population);

//l2 Data Types 

const isIsland = false;
let language;
console.log(typeof isIsland, typeof language, typeof country, typeof continent, typeof population);

//l3 let , const and var 
language = "German";

/*continent = "Asia";
isIsland = true;
console.log(continent, isIsland)*/
// da Variablen als Const deklaritert und initialisiert wurden können diese nicht mutiert werden

//l4 Basic Operators 

let populationHalf = population / 2
populationHalf++;
console.log(populationHalf)
let populationFinnland = 6000000;
console.log(population > populationFinnland)

let discription = country + " is in " + continent + " ,and its " + population + " people speak " + language;
console.log(discription);