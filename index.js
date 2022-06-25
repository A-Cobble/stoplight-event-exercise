let stopButton = document.getElementById('stopButton');
let stopLight = document.getElementById('stopLight');
let slowButton = document.querySelector('#slowButton');
let slowLight = document.querySelector('#slowLight');
let goButton = document.querySelector('#goButton');
let goLight = document.querySelector('#goLight');
let buttons = document.querySelectorAll('.button'); //[returns all buttons with the class: button] => [stopButton, slowButton, goButton]
let controls = document.getElementById('controls');

stopButton.addEventListener('click', () => {
  stopLight.classList.toggle('stop')
})
slowButton.addEventListener('click', () => {
  slowLight.classList.toggle('slow');
})
goButton.addEventListener('click', () => {
  goLight.classList.toggle('go');
})


let enterButton = (event) => {
  console.log(`Entered the ${event.target.textContent} button`)
}
let exitButton = (event) => {
  console.log(`Left the ${event.target.textContent} button`)
}
for (let i =0; i< buttons.length;i++){
buttons[i].addEventListener('mouseenter', enterButton);
buttons[i].addEventListener('mouseleave', exitButton);
}


controls.addEventListener('click', (event) => {
  if(event.target.id === 'stopButton' && stopLight.classList.contains('stop')){
    console.log(event.target.textContent + ' bulb is on');
  } 
  else if(event.target.id === 'slowButton' && slowLight.classList.contains('slow')){
    console.log(event.target.textContent + ' bulb is on');
  }
  else if(event.target.id === 'goButton' && goLight.classList.contains('go')){
    console.log(event.target.textContent + ' bulb is on');
  }else if(event.target.classList.contains('button')){
    console.log(event.target.textContent + ' bulb is off');
  }
})
