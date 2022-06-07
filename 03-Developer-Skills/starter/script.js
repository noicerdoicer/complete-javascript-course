// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
const x = 34;

const calcAge = (birthYear) => 2037 - birthYear;

if (x == 23) console.log(23);
console.log(calcAge(1991));

// We work for a company building a smart home thermometer. Our most recent task is this:
//"Given an array of temperatur of one day , calculate the temperatur amplitude, Keep in mind that sometimes
// there might be a sensor error"

const temperatur = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

//1) Understand the problem
//- What is temp amplitude ? Anwser: difference between highest and lowest temp
//- how to compute max and min temperatur ?
//- Whats a sensor error ? And what to do ?

//2) Breaking up into sub-problems
//How to ignore errors ?
//- Find the max value in temp array
//-find the min value in temp array
//-subtract min form max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];

  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") {
      continue;
    }

    if (temps[i] > max) {
      max = temps[i];
    }

    if (temps[i] < min) {
      min = temps[i];
    }
  }
  console.log(max, min);

  return max - min;
};

//calcTempAmplitude([3, 5, 6, 8, 231, 156]);
const amplitude = calcTempAmplitude(temperatur);

//console.log(amplitude);

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") {
      continue;
    }

    if (temps[i] > max) {
      max = temps[i];
    }

    if (temps[i] < min) {
      min = temps[i];
    }
  }
  console.log(max, min);

  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);

console.log(amplitudeNew);
*/

const measureKelvin = function () {
  const measurement = {
    typ: "temp",
    unit: "celsius",

    //C) Fixing the bug
    //value: Number(prompt("Degrees celsius:")),
    value: 10,
  };

  //B) Find the bug
  console.table(measurement); //Zeigt Objekt als Tabelle

  console.log(measurement.value);
  //console.warn(measurement.value);
  //console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
//A) Identify the bug

console.log(measureKelvin());

const bug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") {
      continue;
    }

    if (temps[i] > max) {
      max = temps[i];
    }

    if (temps[i] < min) {
      min = temps[i];
    }
  }
  console.log(max, min);

  return max - min;
};

const amplitudeBug = bug([3, 5, 1], [9, 4, 5]);

console.log(amplitudeBug);
