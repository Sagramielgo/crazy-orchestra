'use strict';

window.addEventListener('keydown', function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!'audio') return;
  audio.currentTime = 0;
  audio.play();
});

/* const keys = document.querySelectorAll('.key');

function playSound(ev) {
  const audio = document.querySelector(`audio[data-key="${ev.keycode}"]`);

  const key = document.querySelector(`key[data-key="${ev.keycode}"]`);
}

window.addEventListener('keydown', playSound);
 */
