const canvas = document.querySelector('#drawingCanvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const codigo = document.createElement('img');
const renault = document.createElement('img');

codigo.src = 'imagenes/codigos.jpg';
renault.src = 'imagenes/renault.png';

let pincel = codigo;

const context = canvas.getContext('2d');

const movimientoMouse = (event) => {
  const izquierda = event.clientX;
  const arriba = event.clientY;

  context.drawImage(pincel, izquierda, arriba);
}

const hacerClick = () => {
  if (pincel === codigo) {
    pincel = renault;
  } else {
    pincel = codigo;
  }
}

canvas.addEventListener('click', hacerClick);
canvas.addEventListener('mousemove', movimientoMouse);
