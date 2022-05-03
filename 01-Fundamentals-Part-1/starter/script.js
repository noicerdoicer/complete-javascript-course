/*
////////////////////////////////////
// Linking a JavaScript File
let js = "amazing";
console.log(40 + 8 + 23 - 10);

////////////////////////////////////
// Values and Variables
console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);



let javaScriptIsFun = true;
console.log(javaScriptIsFun);

//Typeof dient zur Erkennung des Datentyps einer Variable oder eines Wertes
//console.log(typeof true);
console.log(typeof javaScriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'Jonas');

javaScriptIsFun = 'Yes!';
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);


year = 1991
console.log(typeof year);


console.log(typeof null);


let age = 30;
age = 31;
console.log(age);

const birtYear = 1991;
//birtYear = 1990;



var job = 'programmer';
job = 'teacher';


lastName = 'Schmedtmann';
console.log(lastName)
//Math Operator
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ',', ageSarah);


console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
// 2 ** 3 means 2 to tthe power of 3 = 2*2*2 --> potenz


const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + " " + lastName);


//Assignment operators
let x = 10 + 5;//x = 15
x += 10 // x = 25 weil man wert von X mit 10 addiert
x *= 4;
x++;
x--;
x--;
console.log(x)

//Comparison operators
console.log(ageJonas > ageSarah);// >,<;>=,<=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);


let x, y;

x = y = 25 - 10 - 5; // x = y = 10, x = 10 weil "=" rechts nach links
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2

console.log(ageJonas, ageSarah, averageAge);

const firstName = 'Simon';
const job = 'Student';
const birthYear = 1998;
const year = 2037;

const simon = "I'm " + firstName + " , a " + (year - birthYear) + " years old " + job + " !";

console.log(simon);


//template Sting ${} um Varialben und Berechnungen einzufügen , immer `` um Strings einzufügen
const simonNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
console.log(simonNew);


console.log('String with \n\  multiple \n\ lines');

// Template Literals , neue Variante für Multiline Strings
console.log(`String 
multiple 
lines `);*/

/*const age = 15;


if (age >= 18) {
    console.log('Sarah can start driving licencse🤳')

}
else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young , she needs to wait ${yearsLeft} years 🤣`)
};

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
    let century = 20;
}
else {
    let century = 21;
}

//cenutury muss außerhalb des if Statements initialisiert werdem , damit man die Varialbe über die Console ausgeben kann
console.log(century;

//Type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));

console.log(String(23), 23);

//Type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1;  // fügt die Zahlen zu einem String
n -= 1;          // Konvertiert n in eine Zahl und zieht 1 ab
console.log(n); */

//5 falsy values : 0,'',undefined,null, NaN

/*console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));*/


/*const money = 100;

if (money) {
    console.log("Don't spend it all");
}
else {
    console.log("You should get a job!");
}


let height = 10;
if (height) { console.log("Height is defined"); }
else { console.log("Height is undefined"); }


//Vergleichsparameter === betreibt keine Type Coneversion , nur ==
const age = '18';

if (age === 18) { console.log('You just became an adult :D'); }

if (age == 18) { console.log('You just became an adult :D (loose)'); }


const favourite = Number(prompt("What is your favourite Number ?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 23 === 23
    console.log('Cool! 23 is an amazing number!')
}
else if (favourite === 7) {
    console.log('7 is also a cool number!');
}
else { console.log('Number is not 23 or 7'); }


if (favourite !== 7) { console.log('Why not 7'); }

//Logic operators

const hasDriversLicence = true; //A 
const hasGoodVision = true; // B

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);


const ShouldDrive = hasDriversLicence && hasGoodVision;
/*
if (ShouldDrive) {
    console.log('Sarah is able to drive !');
}
else { console.log('Someone else should drive !'); }
*/

/*const isTired = false; // C

console.log(hasDriversLicence && hasGoodVision && !isTired);


if (hasDriversLicence && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive !');
}
else { console.log('Someone else should drive !'); }*/

/*
const day = 'sunday';


switch (day) {
    case 'monday':
        console.log('I plan my course structure');
        console.log('Got to coding Meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code Example');
        break;
    case 'friday':
        console.log('record Videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('enjoy the weekend');
        break;
    default:
        console.log('Not a valid Day');
}
*/
const age = 15;
 age >= 18 ? console.log('I like to drink wine') : console.log('I dont like wine');
const drink = age >=18 ?'wine':'water';
console.log(drink);

let drink2;
if(age >=18){
    drink2 = 'wine';
}
else{
    drink2 ='water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine':'water'}`);