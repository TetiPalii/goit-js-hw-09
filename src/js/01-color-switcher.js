const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let id = null;
console.log(stopBtn);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStopBtn);

function onStartBtn() {
  startBtn.disabled = true;
  id = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopBtn() {
  startBtn.disabled = false;
  clearInterval(id);
}

// function changeColor() {
//   const id = setInterval(() => {
//     document.body.style.backgroundColor = getRandomHexColor();
//   }, 1000);
//   return id;
// }
