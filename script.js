let play = document.querySelector('.play')
let pause = document.querySelector('.pause')
let sound_on = document.querySelector('.soundOn')
let sound_off = document.querySelector('.soundOff')

play.addEventListener('click', function() {
  play.classList.toggle('hide');
  pause.classList.toggle('hide');
})

pause.addEventListener('click', function() {
  play.classList.toggle('hide');
  pause.classList.toggle('hide');
})

sound_on.addEventListener('click', function() {
  sound_on.classList.toggle('hide')
  sound_off.classList.toggle('hide')
})

sound_off.addEventListener('click', function() {
  sound_on.classList.toggle('hide')
  sound_off.classList.toggle('hide')
})

