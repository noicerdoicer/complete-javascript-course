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
let heightMark = 1.69;
let massMark = 78;

let bmiMark = massMark / heightMark ** 2;

let heightJohn = 1.95;
let massJohn = 92;

let bmiJohn = massJohn / heightJohn ** 2;

let bmiHigher = bmiMark > bmiJohn;

console.log(bmiHigher)

// Data 2
let height2Mark = 1.88;
let mass2Mark = 95;

let bmi2Mark = mass2Mark / height2Mark ** 2;

let height2John = 1.76;
let mass2John = 85;

let bmi2John = mass2John / height2John ** 2;

let bmi2Higher = bmi2Mark > bmi2John
console.log(bmi2Higher)






