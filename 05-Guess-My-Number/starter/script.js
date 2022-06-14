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
