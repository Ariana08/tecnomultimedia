class Juego {
  constructor() { 
    this.oso =  new Oso();
    this.personaje = new Personaje();
    this.casa =  new Casa();
    this.img = objeto[14];
    this.osoGana = false;
    this.pjGana = false;
  }

  draw() {
    image (this.img, 0, 0, width, height);
    this.oso.draw();
    this.personaje.draw();
    this.casa.draw();
    push();
    fill (0);
    textSize(50);
    text ("¡LLEGA ANTES QUE EL OSO!", 50, 100);
    pop();
    
    if (this.personaje.vida==false) { //Si colisiona ricitos de oro
      console.log("Ganaste")
        image(fondo[12], 0, 0, 800, 800);
      push();
      fill(255, 197, 49);
      rect(0, 0, 400, 100);
      pop();
      push();
      fill(0);
      textSize(20);
      text("ESC PARA REINICIAR", 550, 780);
      textSize(50);
      text( "GANASTE", 36, 15, 350, 100 );
      pop();
      //Creo las pantallas nuevamente por no poder comunicarme con la variable de estados
    } else if (this.oso.vida==false) { //si colisiona el oso
      console.log("Perdiste");
      image(fondo[4], 0, 0, 800, 800);
      push();
      fill(255, 197, 49);
      rect(0, 0, 400, 100);
      pop();
      push();
      fill(0);
      textSize(20);
      text("ESC PARA REINICIAR", 550, 780);
      textSize(50);
      text( "PERDISTE", 36, 15, 350, 100 );
      pop();
    }
  }
  //Aca intento agregar un boton de reinicio pero no logro comunicarme con la variable Estado que fue creada en Aventura Grafica
  reiniciar(keyPressed) {
    if (keyCode === ESCAPE) {
      this.aventuraGrafica.estado = 0;
    }
  }
  teclaPrecionada (keyPressed) {
    this.personaje.teclaPrecionada(keyPressed);
  }
}
