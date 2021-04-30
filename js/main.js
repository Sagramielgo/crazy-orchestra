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

const buttonElement = document.querySelectorAll('.key');

function handleClick(ev) {
  if (ev.currentTarget.classList.contains('key')) {
    let songToPlay = ev.currentTarget.dataset.sound;
    const audio = document.querySelector(
      `audio[data-sound="${ev.currentTarget.dataset.sound}"]`
    );
    const key = document.querySelector(
      `.key[data-sound="${ev.currentTarget.dataset.sound}"]`
    );
    audio.currentTime = 0;
    if (audio.paused) {
      audio.play(songToPlay);
    } else {
      audio.pause(songToPlay);
    }
    /*  audio.play(songToPlay); */
    key.classList.toggle('playing');
    key.classList.remove('fa-play');
  }
}

for (let index = 0; index < buttonElement.length; index++) {
  buttonElement[index].addEventListener('click', handleClick);
}
