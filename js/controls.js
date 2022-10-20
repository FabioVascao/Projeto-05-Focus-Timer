export default function Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet
}) {

  function play() {
    buttonPlay.classList.toggle('hide');
    buttonPause.classList.toggle('hide');
    buttonStop.classList.toggle('hide');
    buttonSet.classList.toggle('hide');
  }

  function pause() {
    buttonPlay.classList.toggle('hide');
    buttonPause.classList.toggle('hide');
  }

  function reset() {
    buttonPlay.classList.toggle('hide');
    buttonPause.classList.toggle('hide');
    buttonStop.classList.toggle('hide');
    buttonSet.classList.toggle('hide');
  }

  function getMinutes() {
    let newMinutes = prompt('Quanto minutos?')
      if(!newMinutes) {
        return false
      }
    return newMinutes
  }

    return { 
      reset,
      play,
      pause,
      getMinutes
    }
}
