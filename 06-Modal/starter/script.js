'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);

  //X Button in Modal Fenster schließt Fenster
  //Nicht Funktion sondern Variable aufrufen ,
  // da sonst direkt Fenster durch Funktionsaufruf geschlossen wird
  btnCloseModal.addEventListener('click', closeModal);

  //Overlay clicken um Fenster zu schließen
  overlay.addEventListener('click', closeModal);
}

//mit dem Eventlistener 'keydown' prüft man ob eine Taste gedrückt wird.
//in der anonymen Funktion wird der Tastendruck als Parameter der Funktion übergeben
//Bei einem Event erstellt Jaava Script ein Objekt für das Keydown Event
document.addEventListener('keydown', function (e) {
  //e.key ruft im Keydown Event Objekt die Eigenschaft key aus , die die gedrückte Taste enhält
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
