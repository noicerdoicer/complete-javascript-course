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


function calcAge1 (birthYear){
    return 2037 - birthYear;
    // Man kann Werte direkt ausrechen und über return zurückgeben
}

const age1 = calcAge1(1991);
console.log(age1);

//Anonyme Funktion
const Age2 = function(birthYear){
    return 2037 -birthYear;
}

