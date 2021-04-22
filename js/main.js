'use strict';

const keys = document.querySelectorAll('.key');

function playSound(ev) {
  const audio = document.querySelector(`audio[data-key="${ev.keycode}"]`);

  const key = document.querySelector(`key[data-key="${ev.keycode}"]`);
}

window.addEventListener('keydown', playSound);
