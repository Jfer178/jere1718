const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')

let fontSize = 5
let messages = [
  ' TE VOY DAR OTRA OPORTUNIDAD :)(NO)',
  ':( ME VOY A PONER TRISTE (NO)',
  ' YO SE QUE TU QUIERES :) (NO)',
  ' PIENSALO 5 minutos (NO)',
  ' <-----Mira el otro botón (NO)',
  'PIENSALO PORFA :(',
  'PERO PIENSALO ECHE (NO)',
  'ME VAS HACER COGER RABIA (NO)',
  'YO TE AMO SABES? (NO)',
  'Piensalo 10 minutos mas :)'
]

buttonNo.addEventListener('click', () => {
  fontSize = fontSize + .5
  buttonYes.style.fontSize = `${fontSize}rem`

  const indexRandom = Math.floor(Math.random() * messages.length)

  buttonNo.textContent = messages[indexRandom]
})

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex'
})