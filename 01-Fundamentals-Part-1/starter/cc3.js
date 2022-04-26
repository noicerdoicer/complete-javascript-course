/*
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

Your tasks:
1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
*/

//Dolphins
//Set 1
/*const Dolphins1 = 96;   
const Dolphins2 = 108;
const Dolphins3 = 89;*/

//Set 2 
/*const Dolphins1 = 97;
const Dolphins2 = 112;
const Dolphins3 = 101;*/

//Set 3 
const Dolphins1 = 97;
const Dolphins2 = 112;
const Dolphins3 = 101;

//Koalas
///Set 1
/*const Koalas1 = 97;
const Koalas2 = 112;
const Koalas3 = 101;*/

// Set 2
/*const Koalas1 = 109;
const Koalas2 = 95;
const Koalas3 = 123;*/

/*//Set 3 
const Koalas1 = 109;
const Koalas2 = 95;
const Koalas3 = 106;

//1. Durchschnitt berechnen 

const avgDolphins = (Dolphins1 + Dolphins2 + Dolphins3) / 3;

const avgKoalas = (Koalas1 + Koalas2 + Koalas3) / 3;

console.log(avgDolphins, avgKoalas);



//2. Avg vergleichen
if (avgDolphins > avgKoalas && avgDolphins >= 100) {
    console.log('Dolphin avg ist größer.');
}
else if (avgDolphins == avgKoalas && (avgDolphins && avgDolphins >= 100)) {
    console.log('Beide avg sind gleich.');
}

else if (avgKoalas >= avgDolphins && avgKoalas >= 100) {
    console.log('Koala avg ist größer.');
}
else {
    console.log('Nicht groß genug');
}