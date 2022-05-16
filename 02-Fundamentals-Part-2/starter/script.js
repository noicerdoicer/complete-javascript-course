"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true;
if(hasDriversLicense) console.log('I can drive');
*/

/*
,//Funktion deklarieren 
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
/*
function cutFruitPieces (fruit){
    return fruit * 4;
}

function fruiteProcessor(apples,oranges){

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange `;
    return juice;
}

console.log( fruiteProcessor (2,3));

*/

/*
const calcAge = function(birthYear){
    return 2037 - birthYear;
}

const yearsUntilRetirenment = function (birthYear, firstName)  {
    const Age =  calcAge(birthYear);
    const retirement = 65-Age;

if(retirement > 0){
    //return Keyword lässt direkt Funktion verlassen
    return retirement;
}
else{ 
    console.log('Mike has already retired');
    return -1;
}

// return `${firstName} retires in ${retirement} years`;
 }

console.log(yearsUntilRetirenment(1991,'Jonas'));
console.log(yearsUntilRetirenment(1950,'Mike'));
*/

/*

//mehrer Daten ohne Arrays speichern
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

//array
//Friends wurde als Const deklariert. Nur primitive Variablen sind nicht motiervar. Array ist kein primitiver Datentyp
//man kann jedoch nicht das ganze Array auf einmal neu deklarieren
const friends = ['Michael','Steven','Peter'];


console.log(friends);

//const years = new Array(1991,1984,2008,2020);


console.log(friends[2]);


console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas'
const jonas = [firstName,'Schmedtmann',2037-1991,'teacher',friends];

console.log(jonas);


//Exercise 
const calcAge = function(birthYear){
    return 2037 - birthYear;
}
const years = [1990,1967,2002,2010,2018];

//man kann array nicht in Funktion übergeben , die nur einen Wert erwartet ==> NaN Fehlermeldung
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);

console.log(age1 , age2 , age3);


const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length-1])];
console.log(ages);
*/

/*
const friends = ['Michael','Steven','Peter'];
const newLength = friends.push('Jay');

//Element hinzufügen
//Element an das Array hängen
console.log(friends);
console.log(newLength);


//Element an den Beginn des Array hinzufügen
friends.unshift ('John');
console.log(friends);

//Element entfernen
friends.pop(); //Last
,const popped = friends.pop(); 
console.log(popped);//gibt popped Element zurück , nicht array Länge
console.log(friends);


friends.shift();//First
console.log(friends)


//to retrieve the Index of an Element in an Array
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));


friends.push(23);
//ES & Funktion die Case Sensitive ist und strikter Gleichheit
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if(friends.includes('Peter')){
    console.log('You have a friend called Peter')
}
else if (friends.includes('Steven')){
    console.log('You have a Friend called Steven');
}
*/
/*
//Array
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'teacher',
    ['Michael','Peter','Steven']
];


//Object Literal Context
const jonas = {
    firstname : 'Jonas',
    lastname : 'Schmedtmann',
    age : 2037-1991,
    job : 'teacher',
    friends:['Michael','Peter','Steven']
}


console.log(jonas.firstname);
*/

/*
const jonas = {
    firstName : 'Jonas',
    lastName : 'Schmedtmann',
    age : 2037-1991,
    job : 'teacher',
    friends:['Michael','Peter','Steven']
}

console.log(jonas);

//Punkt Noation 
console.log(jonas.lastName);

//Klammer Notation
//hiebrei keinen computed Indicator genutzt werden , geht nicht bei Punkt Notation
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first'+nameKey]);
console.log(jonas['last'+nameKey]);

//Funktioniert so nicht
//console.log(jonas.'last'+nameKey);

const interestedIn = prompt('What do you want to kno about Jonas? Choose between firstName , lastName , age, job and friends');

//Abfrage um zu prüfen , ob Eigenschaft des Objektes existiert
if(jonas[interestedIn]){
    console.log(jonas[interestedIn]);
}
else{
    console.log('Wrong request. Choose between firstName , lastName , age, job and friends');
}

//Neuen Eigenschaften zu Objekt hinzufügen

jonas.location ='Portugal';

jonas['twitter'] = '@jonasschmedtmann';

console.log(jonas);

//Challenge 
//"Jonas has 3 friends , and his best friend is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} ,  and his best friend is called ${jonas.friends[0]}`);
*/
/*
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriverLicense: true,

  // Funktion wird nicht als Variable sondern als Eigenschaft des Objektes Jonas gespeichert.
  //Funktion die zu einem Objekt gehört , wird als Methode bezeichnet
  /*  calcAge: function(birthYear){
        return 2037-birthYear;
    }
};*/

/*calcAge: function(){
    //This wird genutzt um die Dry Regel nicht zu verletzen
    console.log(this)
    return 2037 - this.birthYear;
}*/
/*
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  //Challenge
  //" Jonas is a 46-year old teacher, and he has a/no drivers license"
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    } and he has ${this.hasDriverLicense ? "a" : "no"} drivers license`; //ersetzt eine kleine IF Schleife
  },
};
//dot notation
console.log(jonas.calcAge());
console.log(jonas.age);

console.log(jonas.getSummary());
*/

/*
const repetiton = 10;

for (let index = 1; index <= repetiton; index++) {
  console.log(`Repetition ${index}`);
}*/

/*
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

for (let index = 0; index < jonasArray.length; index++) {
  //reading Elements from jonas array
  console.log(jonasArray[index], typeof jonasArray[index]);
  //filling the types array
  //types[index] = typeof jonasArray[index];
  //hängen neues Element vorne an das jonasArray an.
  types.push(typeof jonasArray[index]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let index = 0; index < years.length; index++) {
  ages.push(2037 - years[index]);
}
console.log(ages);

console.log("----Only Strings----");
//continue and break
for (let index = 0; index < jonasArray.length; index++) {
  if (typeof jonasArray[index] !== "string") continue;

  console.log(jonasArray[index], typeof jonasArray[index]);
}

console.log("----Break with Number----");
//continue and break
for (let index = 0; index < jonasArray.length; index++) {
  if (typeof jonasArray[index] === "number") break;

  console.log(jonasArray[index], typeof jonasArray[index]);
}
*/
/*
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

//0,1....,4
//4,3,...,0
//array rückwärts zählen lassen
for (let index = jonasArray.length - 1; index >= 0; index--) {
  console.log(index, jonasArray[index]);
}

//nested if Loop
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--------- Starting Exercises ${exercise}`);
//Übergabe der Variable Exercise aus dem ersten Loop in den verschachtelten Loop 

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Excercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}
*/

//gleichen Loop mit While schreiben --> mit Zählvariable
/*let rep = 1;
while (rep <= 10) {
  console.log(`Repetition ${rep}`);
  rep++;
}*/

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(`You rolled a ${dice}`);

while (dice !== 6) {
  // let dice = Math.trunc(Math.random() * 6) + 1;
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}
console.log(`You rolled a ${dice}`);
