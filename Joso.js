class Oso {
  constructor() {
    this.pers=new Personaje();
    this.x = 0;
    this.y = 700;
    this.tam = 120;
    this.vel = 1;
    this.img = objeto[16];
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
    if (this.x>=width - 100) {
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
    this.estadoJ=3;
  }
  getPosicionX() {
    return this.x;
  }
   colisionPjs() {
    if (dist(this.x, this.y, this.personaje.x, this.personaje.y) < 20) {
      this.colision();
    }
  }
}
