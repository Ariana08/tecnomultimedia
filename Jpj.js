class Personaje {
  constructor() {
    this.x = 110;
    this.y = 700;
    this.tam = 120;
    this.img = objeto[15];
    this.vida = true;

  }
  draw() {
    if (this.vida) {
      this.dibujar();
    }else{
    this.colision();
    }
  }
  dibujar() {
    push();
    imageMode(CENTER);
    image (this.img, this.x, this.y, this.tam, this.tam);
    pop();
  }
  teclaPrecionada(keyPressed) {
    if (keyCode === RIGHT_ARROW) {
      this.moverDerecha ();
    }
  }
  moverDerecha () {
    this.x +=  20;
    if (this.x > width - 100) {
      this.vida= false;
      
    }
  }
  colision() {
    this.estado =2;
  }
  colisionCasa(Casa) {
    if (dist(this.x, this.y, Casa.this.x, Casa.this.y)) {
      this.colision();
    }
  }
}
