const sunMode = document.getElementById('sun-mode')
const moonMode = document.getElementById('moon-mode')
const span = document.querySelector('#toggle-mode span')
const html = document.querySelector('html')

span.addEventListener('animationend', stopAnimated())
function stopAnimated() {
  span.classList.remove('toRight', 'toLeft')
}

sunMode.addEventListener('click', () => {
  stopAnimated()
  html.classList.add('light')
  span.classList.add('toRight')

  console.log('to right ->')
})

moonMode.addEventListener('click', () => {
  stopAnimated()
  span.classList.add('toLeft')
  html.classList.remove('light')
  
  console.log('<- to left')
})
