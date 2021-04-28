const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.body,
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
}

refs.startBtn.addEventListener('click', onStartBtnClick)
refs.stopBtn.addEventListener('click', onStopBtnClick)
let isActive = false;
let intervalId = null;


function onStartBtnClick() {
  if (isActive) {
    return;
  }
  isActive = true;
  refs.startBtn.setAttribute("disabled", true)

  intervalId = setInterval(() => {
    colorChange();
  }, 1000)
}


function onStopBtnClick() {
  isActive = false;
  clearInterval(intervalId);
  refs.startBtn.removeAttribute("disabled")
}

function colorChange() {
  refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

