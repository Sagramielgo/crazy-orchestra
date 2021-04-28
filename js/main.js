'use strict';

function playSound(ev) {
  const audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${ev.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
  key.classList.toggle('playing');
}

window.addEventListener('keydown', playSound);

/* function removeTransition() {
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', removeTransition)); */

const buttons = document.querySelectorAll('.key');

function handleClick(ev) {
  if (ev.target.classList.contains('key')) {
    let songToPlay = ev.target.dataset.sound;
    const audio = document.querySelector(
      `audio[data-sound="${ev.target.dataset.sound}"]`
    );
    const key = document.querySelector(
      `.key[data-sound="${ev.target.dataset.sound}"]`
    );
    audio.currentTime = 0;
    if (audio.paused) {
      audio.play(songToPlay);
    } else {
      audio.pause(songToPlay);
    }
    /*  audio.play(songToPlay); */
    key.classList.toggle('playing');
  }
}

for (let index = 0; index < buttons.length; index++) {
  buttons[index].addEventListener('click', handleClick);
}
