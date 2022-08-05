'use strict';

const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');

//# ist für Ids , '.' nur für Klasssen
//Hier wird Element per Queryselector ausgewählt
const score0EL = document.querySelector('#score--0');

//Hier wird Element per ID angesprochen => kein # hier
const score1EL = document.getElementById('score--1');

const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');

const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Startparameter
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//Würfel Funktionalität
btnRoll.addEventListener('click', function () {
  // 1. Generiere eine Zufallszahl
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // 2. Würfel zeigen
  diceEL.classList.remove('hidden');
  diceEL.src = `dice-${dice}.png`;

  // 3. Prüfen ob Würfel gewürfelt: wenn ja
  if (dice !== 1) {
    //Dice zum aktuellen Score hinzufügen
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //zu nächsten Spieler wechseln wenn Spieler eins würfelt.
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');

    console.log(`Active Player is ${activePlayer}`);
  }
});
