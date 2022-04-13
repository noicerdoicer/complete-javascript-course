/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:

BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:


1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:


§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.*/

// Data 1
//variablen kann man als Const deklarieren weil diese Werte im Programm nicht geändert werden
const heightMark = 1.69;
const massMark = 78;

let bmiMark = massMark / heightMark ** 2;
console.log(bmiMark)

const heightJohn = 1.95;
const massJohn = 92;

let bmiJohn = massJohn / heightJohn ** 2;
console.log(bmiJohn)

let bmiHigher = bmiMark > bmiJohn;



console.log(bmiHigher)


// Data 2
const height2Mark = 1.88;
const mass2Mark = 95;

let bmi2Mark = Math.round(mass2Mark / height2Mark ** 2);

const height2John = 1.76;
const mass2John = 85;

let bmi2John = Math.round(mass2John / height2John ** 2);
console.log(bmi2Mark)

/*let bmi2Higher = bmi2Mark > bmi2John
console.log(bmi2John)*/

if (bmi2John > bmi2Mark) { console.log(`John's BMI (${bmi2John}) is higher than Mark's (${bmi2Mark})!`); }
else { console.log(`Mark's BMI (${bmi2Mark}) is higher than John's ${bmi2John} !`); }

//console.log(bmi2Higher)







