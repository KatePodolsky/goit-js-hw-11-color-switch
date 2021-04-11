const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    start: document.querySelector('[data-action="start"]'),
    stop: document.querySelector('[data-action="stop"]'),
    body:document.querySelector('body')
}
refs.start.style.backgroundColor = '#6cc462'
refs.start.style.color = '#ffffff'
refs.stop.style.backgroundColor = '#ff2457'
refs.stop.style.color = '#ffffff'


refs.start.addEventListener('click', ()=> onSwitch.onStart())
refs.stop.addEventListener('click', ()=> onSwitch.onStop())

const onSwitch = {
  intervalId: null,
  // isActive: false,
  onStart() {
    // if (this.isActive) {
    //   return
    // }
  // this.isActive = true;
  refs.start.disabled = true;
  this.intervalId = setInterval(() => {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)]
}, 1000)
},
  onStop () {
    clearInterval(this.intervalId);
    // this.isActive = false
     refs.start.removeAttribute('disabled')
}
}

 const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
  };
