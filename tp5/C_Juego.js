class Juego {
  constructor() {
    this.oso =  new Oso();
    this.personaje = new Personaje();
    this.casa =  new Casa();
    this.estado = 1;
    this.espera = millis()+5*1000;
    this.img = loadImage("data/fondo.png");
  }

  draw() {

     if ( this.estado == 1 ) {
      //fondo...
      background (0);
      if ( millis() > this.espera ) {
        image (this.img, 0, 0, width, height);
        this.oso.draw();
        this.personaje.draw();
        this.casa.draw();
      } else {
        push();
        fill(255);
        textAlign(CENTER, CENTER);
        textSize (20);
        text("ESCAPA DEL OSO!", width/2, height/2);
        let falta = this.espera-millis();
        text(round(falta/1000), width/2, height/2+100);
        pop();
      }
      //evaluar si gana o pierde
    } else if ( this.estado == 2 ) {
      //gane...
      background(0);
      textSize (20);
      fill(255);
      text("LLEGASTE A CASA", width/2, height/2);
    } else if ( this.estado == 3 ) {
       background(0);
      textSize (20);
      fill(255);
      text("TE ALCANZO", width/2, height/2);
    }
  }
  teclaPrecionada(keyCode) {
    this.personaje.teclaPrecionada(keyCode);
  }
 
}
