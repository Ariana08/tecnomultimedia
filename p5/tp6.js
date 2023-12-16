//Ariana Cesar 91314/7
let aventuraGrafica;
let juego;
let fondo0, fondo1, fondo2, fondo3, fondo4, fondo5, fondo6, fondo7, fondo8, fondo9, fondo10, fondo11, fondo12;
function setup() {

  //creo la dimencion de la pantalla web
  createCanvas(800, 800);
  //Creo objeto de la clase
  aventuraGrafica = new Aventura();
  juego = new Juego();
}


function draw() {
  //ejecuto en draw
  aventuraGrafica.draw();
}
function mousePressed() {
  aventuraGrafica.paso();
}
function keyPressed() {
  juego.teclaPrecionada();
  juego.reiniciar();
}
