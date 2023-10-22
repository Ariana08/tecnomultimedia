class Oso {
  constructor() {
    this.x = 0;
    this.y = 300;
    this.tam = 120;
    this.vel = 0.5;
    this.img = loadImage("data/oso.png");
    this.vida = true;
  }
  //metodos
  draw() {
    if (this.vida) {
      this.mover();
      this.dibujar();
    }
  }

  //declaracion de mover:
  mover() {
    this.x+=this.vel;
    if (this.x>= width -100) {
      this.vida = false
    }
  }
  dibujar() {
    push();
    imageMode(CENTER);
    image (this.img, this.x, this.y, this.tam, this.tam);
    pop();
  }
  colision() {
    estado=3;
  }
  getPosicionX() {
    return this.x;
  }
  colisionPjs(Personaje) {
    if (dist(this.x, this.y, Personaje.this.x, Personaje.this.y)){
      colision();
    }
  }
}
