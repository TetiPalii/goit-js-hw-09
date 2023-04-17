const form = document.querySelector('.form');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({
          position: position,
          delay: delay,
        });
      } else {
        reject({
          position: position,
          delay: delay,
        });
      }
    }, delay);
  });
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const {
    elements: { delay, step, amount },
  } = e.currentTarget;

  for (
    let delayStep = Number(delay.value);
    (delayStep += Number(step.value));

  ) {
    for (let i = 1; i <= amount.value; i += 1) {
      createPromise(i, delayStep)
        .then(({ position, delay }) => {
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        });
    }
  }
}
