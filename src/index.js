function addAudio(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

  if(!audio) return;
  audio.play();
  audio.currentTime = 0;

  key.classList.add("playing");
};

window.addEventListener("keydown", addAudio);

function removeTransition(event) {
  if(event.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
  key.addEventListener('transitionend', removeTransition);
});


