'use strict';

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

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number !';
  }
});
