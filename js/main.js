'use strict';

function playSound(ev) {
  const audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${ev.keyCode}"]`);
  if (!'audio') return;
  audio.currentTime = 0;
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
  key.classList.add('playing');
}

window.addEventListener('keydown', playSound);

function removeTransition() {
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
