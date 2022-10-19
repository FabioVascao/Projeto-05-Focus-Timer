const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.soundOn')
const buttonSoundOff = document.querySelector('.soundOff')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

buttonPlay.addEventListener('click', function() {
  buttonPlay.classList.toggle('hide');
  buttonPause.classList.toggle('hide');
  buttonStop.classList.toggle('hide');
  buttonSet.classList.toggle('hide');
  countdown();
})

buttonPause.addEventListener('click', function() {
  buttonPlay.classList.toggle('hide');
  buttonPause.classList.toggle('hide');
  clearTimeout(timerTimeOut);
})

buttonStop.addEventListener('click', function() {
  resetControls();
  resetTimer();
})

buttonSoundOn.addEventListener('click', function() {
  buttonSoundOn.classList.toggle('hide')
  buttonSoundOff.classList.toggle('hide')
})

buttonSoundOff.addEventListener('click', function() {
  buttonSoundOn.classList.toggle('hide')
  buttonSoundOff.classList.toggle('hide')
})

buttonSet.addEventListener('click', function() {
  let newMinutes = prompt('Quanto minutos?')
  if(!newMinutes) {
    resetTimer();
    return
  }
  minutes = newMinutes
  updateTimerDisplay(minutes, 0);
})

function countdown () {
  timerTimeOut = setTimeout(function () {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)

    updateTimerDisplay(minutes, 0)

    if (minutes <=0) {
      resetControls()
      return
    }

    if (seconds <=0) {
      seconds = 2
      --minutes
    }

    updateTimerDisplay(minutes, seconds -1)

    countdown()
  }, 1000)
}

function resetControls() {
      buttonPlay.classList.toggle('hide');
      buttonPause.classList.toggle('hide');
      buttonStop.classList.toggle('hide');
      buttonSet.classList.toggle('hide');
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0"); 
}

function resetTimer() {
  updateTimerDisplay(minutes, 0);
  clearTimeout(timerTimeOut);
}