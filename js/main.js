'use strict';

window.addEventListener('keydown', function (ev) {
  const audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${ev.keyCode}"]`);
  if (!'audio') return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
});

/* const keys = document.querySelectorAll('.key');

function playSound(ev) {
  const audio = document.querySelector(`audio[data-key="${ev.keycode}"]`);

  const key = document.querySelector(`key[data-key="${ev.keycode}"]`);
}

window.addEventListener('keydown', playSound);
 */
