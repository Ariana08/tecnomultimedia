//Ariana Cesar 91314/7
//Profesor: David
//variables
int p;
int a;
PFont fuente2;
PFont fuente;
PImage dago;
PImage pierre;
PImage kae;

void setup () {
  //tamaño pantalla
  size (640, 480);
  //declaro variables
  p = 1;
  a=0;
  fuente2 = loadFont("2.vlw");
  fuente = loadFont("groovy.vlw");
  dago = loadImage ("duvier.del.dago.jpg");
  pierre = loadImage ("pierre.huyghe.jpg");
  kae = loadImage ("eduardo.kae.jpg");
}
void draw () {
  //fondo
  background (0);
  //1ra pantalla inicio
  if (p == 1) {
    background(120, 118, 255);
    strokeWeight(0);
    fill (111, 32, 165);
    ellipse (640, 0, 300, 300);
    fill (0);
    strokeWeight(50);
    textFont (fuente);
    text ("ARTE MULTIMEDIAL", 50, 240);
    textFont (fuente2);
    text ("Click para comenzar", 50, 350);
  } //2da pantalla contenido
  else if (p == 2) {
    image (dago, 0, 0);
    fill (200);
    textFont (fuente);
    strokeWeight(20);
    text ("Duvier del Dago", a, 200);
    //aumento de a, deslis de texto 
    a++;
  }//receteo de a y cambio a pantalla 3
  if (a>width ) {
    p=3; //p3 es igual a pantalla 3 cuando a llegue al final de pantalla
    a=0; //a es igual a 0 asi el texto vuelve a pantalla
  }//3ra pantalla contenido
  else if (p == 3) {
    image (pierre, 0, -300);
    fill (0);
    strokeWeight(20);
    text ("Pierre Hyughe", a, 200);
    a++;
  }
  if (a>width ) {
    p=4;
    a=0;
  }//4ta pantalla contenido 
  else if (p == 4) {
    image (kae, 0, 0);
    fill (200);
    strokeWeight(20);
    text ("Eduardo Kae", a, 460);
    a++;
  }
  if (a>width ) {
    p=1;
    a=0;
  } else if (p >4) {
    p=1;
  }
}
//pasage de pantallas por click y de 4ta a 0
void mouseClicked () {
  p++;
  a =0;
}
