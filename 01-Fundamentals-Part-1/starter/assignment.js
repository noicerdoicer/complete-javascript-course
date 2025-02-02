
//L1 Values and Variables

/*let country = "Deutschland";
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
/*
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

*/

//L7 Type Conversion and Coercion
/*
const t1 = '9' - '5'; // 4
const t2 = '19' - '13' + '17'; // 6+17= 617
const t3 = '19' - '13' + 17; //19-13+17 = 23
const t4 = '123' < 57; // 123 is größer --> false
const t5 = 5 + 6 + '4' + 9 - 4 - 2; // '114'+9-4-2 = 1143

console.log(t1, t2, t3, t4, t5);*/

//L8 Equality Operators: == vs. ===
//Dran denken das Numbers Case Sensitive ist
/*const numNeighbour = Number(prompt("How many neighbours do you have"));

if (numNeighbour === 1) {
    console.log('Only 1 neighbour');
}
else if (numNeighbour > 1) {
    console.log(`You have ${numNeighbour} Neighbours`);
}
else {
    console.log('No Neigbours');
}
*/

//L9 Logical Operators

/*
Let's say Sarah is looking for a new country to live in. She wants to live in a
country that speaks english, has less than 50 million people and is not an
island.
*/
/*
const country = "Deutschland";
const continent = "Europa";
const population = 40000000;

const language = "English";
const isIsland = false;
console.log(country, continent, population, isIsland, language, isIsland);


if (language == 'English' && population < 50000000 && !isIsland) {
    console.log(`You should live in ${country}.`);
}
else {
    console.log(`${country} doenst meet Sarahs criteria.`);
}
*/

//L10 The switch Statement

//1.

const language = prompt('Your Language');

//An die Anführungszeichen bei Case denken

switch (language) {

    case 'chinese':
    case 'mandarin':
        console.log("Most Number of speakers");
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 5');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too');
}



