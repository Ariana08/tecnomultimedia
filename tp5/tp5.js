//Ariana Cesar 91314/7
//https://youtu.be/xMapTMnJS1Q

let juego;
let estado;
function setup() {
  createCanvas(900, 400);
  juego = new Juego();
  //creo el objeto de la clase Juego
}

function draw() {
  //dibujo el juego
  juego.draw();
}
function keyPressed() {
  juego.teclaPrecionada(keyCode);
}
