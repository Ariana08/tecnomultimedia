class Personaje {
  constructor() {
    this.x = 100;
    this.y = 300;
    this.tam = 120;
    this.img = loadImage("data/ricitos.png");
    this.vida = true;
  }
  draw() {
    if (this.vida) {
      this.dibujar();
    }
  }
  dibujar() {
    push();
    imageMode(CENTER);
    image (this.img, this.x, this.y, this.tam, this.tam);
    pop();
  }
  teclaPrecionada(keyCode) {
    if (keyCode == RIGHT_ARROW) {
      this.moverDerecha ();
    }
  }
  moverDerecha () {
    this.x +=  15;
    if (this.x > width - 100) {
      this.vida= false;
      estado= 2;
    }
  }
   colision(){
   estado=2;
   }
  colisionCasa(Casa) {
    if (dist(this.x, this.y, Casa.this.x, Casa.this.y)){
      colision();
    }
  }
}
