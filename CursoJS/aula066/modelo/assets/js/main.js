function timer() {
  const timer = document.querySelector('.timer');
  let seconds = 0;
  let timerCount;

  function setSeconds(seconds) {
    let data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12 : false,
      timeZone : 'GMT'
    });
  }

  function countSeconds() {
    timerCount = setInterval(function(){
      seconds++
      timer.innerHTML = setSeconds(seconds);
    }, 1000)
  };

  document.addEventListener('click', function(event) {
    const element = event.target;
    if (element.classList.contains('startTimer')) {
      clearInterval(timerCount);
      countSeconds();
      timer.classList.remove('pausedTimer');
    }
    if (element.classList.contains('pauseTimer')) {
      clearInterval(timerCount);
      timer.classList.add('pausedTimer');
    }
    if (element.classList.contains('clearTimer')) {
      clearInterval(timerCount);
      timer.innerHTML = '00:00:00'
      seconds = 0;
      timer.classList.remove('pausedTimer');
    }
  });
};
timer();