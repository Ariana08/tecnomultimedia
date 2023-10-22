class Casa {
  constructor() {
    this.x = width -100;
    this.y = 300;
    this.tam = 250;
    this.img = loadImage("data/casa.png");
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
