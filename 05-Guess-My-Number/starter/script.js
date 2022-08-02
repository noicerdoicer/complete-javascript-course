'use strict';
/*
//Damit holt man sich den Textinhalt des .message HTML-Objekt
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number !';

//Werte auf der Webseite per querySelector manipulieren
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

console.log(document.querySelector('.number').textContent);

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

//Per Eventlistener wird bei Click des Buttons der Value des Textfeldes in der Kosnole geloggt
const x = function () {
  console.log(23);
};
*/

//Coding Challenge
/*

Implement a game rest functionality, so that the player can make a new guess!
--Your tasks--:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀

*/

//Game Logic

let secretNumber = Math.trunc(Math.random() * 21) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;
document.querySelector('.score').value = score;

//document.querySelector('.number').textContent = secretNumber;
//Again Function mit Eventlistener
document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  //CSS Eigenschaften zurücksetzen
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  //Werte zurücksetzen
  secretNumber = Math.trunc(Math.random() * 21) + 1;
  //document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;

  displayMessage('Start guessing ...');
});

//Score Value  Update
function scoreUpdate(scoreValue) {
  return (document.querySelector('.score').textContent = scoreValue);
}

//Display Message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Guess  click function
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //No guess
  if (!guess) {
    //document.querySelector('.message').textContent = 'No Number !';
    displayMessage('No Number !');

    //Win condition
  } else if (guess === secretNumber) {
    displayMessage('Correct Number !');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //Check Highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
      console.log(highScore);
    }
    //Guess ist falsch
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent = guess > secretNumber ? 'Too High !' : 'Too Low !';
      displayMessage(guess > secretNumber ? 'Too High !' : 'Too Low !');
      score--;
      scoreUpdate(score);
    } else {
      //document.querySelector('.message').textContent = 'You lost the game!';
      displayMessage('You lost the game !');
    }
  }
});
