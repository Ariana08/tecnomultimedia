class Casa {
  constructor() {
    this.x = width -100;
    this.y = 700;
    this.tam = 250;
    this.img = objeto[13];
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
}
