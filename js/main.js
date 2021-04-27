'use strict';

window.addEventListener('keydown', function (ev) {
  const audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${ev.keyCode}"]`);
  if (!'audio') return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
});

function removeTransition(ev) {
  console.log(ev);
}
const keys = document.querySelectorAll('.keys');
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
