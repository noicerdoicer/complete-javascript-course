'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true;
if(hasDriversLicense) console.log('I can drive');
*/

/*
//Funktion deklarieren 
function logger(){
console.log('My name is Jonas');
}

//Funktion ausführen , aufrufen etc...
logger();


function fruiteProcessor(apples,oranges){
    console.log(apples,oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges `;
    return juice;
}
const appleJuice = fruiteProcessor(5,20);
console.log(appleJuice)

//Funktion helfen bei der Einhaltung des DRY Prinzip --> Dont repeat yourself
*/


//Man kann deklariert Funktionen vor ihrer Deklarierung aufrufen
/*
function calcAge1 (birthYear){
    return 2037 - birthYear;
    // Man kann Werte direkt ausrechen und über return zurückgeben
}

//Deklarierte Funktion die man anschließend seperate aufruft
const age1 = calcAge1(1991);
console.log(age1);


//Anonyme Funktion (Function expression)
const calcAge2 = function(birthYear){
    return 2037 -birthYear;
}

const age2 = calcAge2(1991);
console.log(age1,age2);*/

/*
//Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);


const yearsUntilRetirenment = (birthYear, firstName) => {
   const Age =  2037 -birthYear;
   const retirement = 65-Age;
return `${firstName} retires in ${retirement} years`;
}

console.log( yearsUntilRetirenment(1991, 'Simon'));
console.log(yearsUntilRetirenment(1980,'Bob'));*/

//functions calling functions

function cutFruitPieces (fruit){
    return fruit * 4;
}

function fruiteProcessor(apples,oranges){

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${apples} apples and ${oranges} oranges `;
    return juice;
}

fruiteProcessor (2,3);

