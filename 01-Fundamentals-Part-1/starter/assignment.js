
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

// L5 Strings and Templates
let discriptionTemplate = `${country} is in ${continent} ,and its ${population} people speak ${language}.`;
console.log(discriptionTemplate)

// L6 Taking Decisions if/else Statements
const averagePopulation = 33000000;
if (population > averagePopulation) { console.log(`${country}'s population is above average`); }
else { console.log(`${country}'s population is ${averagePopulation - population} below average.`); }


//L7 Type Conversion and Coercion

'9' - '5'; // 4
'19' - '13' + '17'; // 6+17= 33
'19' - '13' + 17; //19-13+17 = 
'123' < 57;
5 + 6 + '4' + 9 - 4 - 2;