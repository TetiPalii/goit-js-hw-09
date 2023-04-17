import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
const startBtn = document.querySelector('[data-start]');
const inputDate = document.querySelector('#datetime-picker');
let timerId = null;
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < Date.now()) {
      Notiflix.Notify.warning('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
    }
  },
};

flatpickr(inputDate, options);

startBtn.addEventListener('click', onstartBtn);

function onstartBtn() {
  const currentDate = new Date(inputDate.value);

  timerId = setInterval(() => {
    const ms = currentDate - Date.now();
    if (ms < 0) {
      return;
    }
    function convertMs(ms) {
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      const days = Math.floor(ms / day);

      const hours = Math.floor((ms % day) / hour);

      const minutes = Math.floor(((ms % day) % hour) / minute);

      const seconds = Math.floor((((ms % day) % hour) % minute) / second);

      daysEl.textContent = days.toString().padStart(2, 0);
      hoursEl.textContent = hours.toString().padStart(2, 0);
      minutesEl.textContent = minutes.toString().padStart(2, 0);
      secondsEl.textContent = seconds.toString().padStart(2, 0);

      return { days, hours, minutes, seconds };
    }

    convertMs(ms);
  });
}
