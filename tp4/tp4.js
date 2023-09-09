//Ariana Cesar 91314/7
//Profesor: David
//Video:
// https://youtu.be/2pgD413sx1Q
var estado = 0;

// Contadores de puntos y errores
var puntos = 0;
var errores = 0;

// Variables para el jugador y el objeto en movimiento
let pj, pjx, pjy, pjp, pjr;
let objeto, obx, oby, obr, obvelx, obvely;
let img1, img2, fondo0, fondo1, fondo2, fondo3;


function setup() {
  // Crear el lienzo
  createCanvas(600, 600);
  // Fondo del lienzo
  background(200, 100, 220);
  //Cargo imagenes
  img1 = loadImage("data/naranja.png");
  img2 = loadImage("data/capibara.png");
  fondo0 = loadImage("data/fondo.png");
  fondo1 = loadImage("data/fondo1.png");
  fondo2 = loadImage("data/fondo2.png");
  fondo3 = loadImage("data/fondo3.png");
  //Valores de pj
  pjy= height-20;
  pjx= 400;
  pjp= 400;
  pjr= 50;
  //Valores de objeto
  obr= 20;
  obx = random(800);
  oby=0;
  obvely= 2 ;
  //Crear el personaje
  pj = dibujarPj();
  objeto = dibujarObjeto();
}


function draw() {

  // Diferentes estados del juego
  if (estado === 0) {
    pInicio();
  } else if (estado === 1) {
    pJugando();
  } else if (estado === 2) {
    pPerdiste();
  } else if (estado === 3) {
    pGanaste();
  }
}
function mouseClicked() {
  if (estado === 0) {
    estado=1;
  } else if (estado===2) {
    estado=0;
  } else if (estado===3) {
    estado=0;
  }
}
