let fondo = [];
let cantImg = 13;
let objeto = [];
//declaro la clase
class Aventura {
  //con el constructor
  constructor() {
    this.estado = 0; //creo la variable estado para la logica
    //cargo las imagenes del fondo
    for ( let i= 1; i < cantImg; i++) {
      fondo[i]= loadImage("./assets/"+ i +".jpg")
    }
    for ( let i= 13; i < 19; i++) {
      objeto[i]= loadImage("./assets/"+ i +".png")
    }
  }
  draw () {
    //creo la logica de estados
    //estado 0
    if (this.estado==0 ) {
      //Creo pantalla de inicio
      image(fondo[1], 0, 0, 800, 800);  //imagen fondo

      image(objeto[17], 600, 400, 200, 200);// imagen boton

      push();
      textSize (80);
      fill(255);
      text("Ricitos de Oro", 10, 70);
      pop();
      //agrego boton de creditos que cambie de color
      if ((mouseX > 100 && mouseX < 100 + 120 && mouseY > 200 && mouseY < 200 + 50) && (this.estado == 0)) {
        fill(255, 100, 40);
      } else {
        fill (255, 197, 49);
      }
      rect (100, 200, 120, 50);
      push();
      fill(0);
      noStroke();
      textSize (28);
      text ("Créditos", 108, 235);
      pop();
    }
    //estado 1
    else if (this.estado == 1) {
      //agrego la imagen y elementos narrativos de cada pantalla
      image(fondo[2], 0, 0, 800, 800);
      image(objeto[17], 600, 400, 200, 200);// imagen boton
      image(objeto[18], 0, 400, 200, 200);// imagen boton (final malo)
      push();
      fill(255, 197, 49);
      rect(0, 0, 400, 100);
      pop();
      push();
      fill(0);
      textSize(20);
      text( "VAMOS A JUGAR, pero mamá me advirtió no ir al bosque a pesar de que se ve divertido. ¿Dónde Juego?", 36, 15, 350, 100 );
      pop();
    }
    //estado 2
    else if (this.estado == 2) {
      //agrego la imagen y elementos narrativos de cada pantalla
      image(fondo[3], 0, 0, 800, 800);
      image(objeto[17], 600, 400, 200, 200);// imagen boton
      push();
      fill(255, 197, 49);
      rect(0, 0, 400, 100);
      pop();
      push();
      fill(0);
      textSize(20);
      text( "Encontre una casa a lo lejos en el bosque,\n Se ve interesante. ¡Debería entrar!", 36, 15, 350, 100 );
      pop();
    }
    //estados 3
    else if (this.estado == 3) {
      //agrego la imagen y elementos narrativos de cada pantalla
      image(fondo[5], 0, 0, 800, 800);
      image(objeto[17], 600, 400, 200, 200);// imagen boton
      push();
      fill(255, 197, 49);
      rect(0, 0, 400, 100);
      pop();
      push();
      fill(0);
      textSize(20);
      text( "Toque la puerta varias veces y\n nadie salia, asi que pasé.", 36, 15, 350, 100 );
      pop();
    }
    //estado 4
    else if (this.estado == 4) {
      //agrego la imagen y elementos narrativos de cada pantalla
      image(fondo[6], 0, 0, 800, 800);
      image(objeto[17], 600, 400, 200, 200);// imagen boton
      push();
      fill(255, 197, 49);
      rect(0, 0, 400, 100);
      pop();
      push();
      fill(0);
      textSize(15);
      text( "Al entrar encontré tres platos de avena,\n tenía mucha hambre así que pensé\n en probar de ellos.\n ¿Debería hacerlo?", 36, 15, 350, 100 );
      pop();
    }

    //estado 5
    else if (this.estado == 5) {
      //agrego la imagen y elementos narrativos de cada pantalla
      image(fondo[7], 0, 0, 800, 800);
      image(objeto[17], 600, 400, 200, 200);// imagen boton
      push();
      fill(255, 197, 49);
      rect(0, 0, 400, 100);
      pop();
      push();
      fill(0);
      textSize(15);
      text( "Luego de probar de los tres platos,\n me dió sueño, pero estoy muy lejos de casa.\n  Debería dormir aqui!", 36, 15, 350, 100 );
      pop();
    }

    //estado 6
    else if (this.estado == 6) {
      //agrego la imagen y elementos narrativos de cada pantalla
      image(fondo[8], 0, 0, 800, 800);
      image(objeto[17], 600, 400, 200, 200);// imagen boton
      push();
      fill(255, 197, 49);
      rect(0, 0, 400, 100);
      pop();
      push();
      fill(0);
      textSize(30);
      text( "¡La cama es muy comoda!", 36, 15, 350, 100 );
      pop();
    }

    //estado 7
    else if (this.estado == 7) {
      //agrego la imagen y elementos narrativos de cada pantalla
      image(fondo[9], 0, 0, 800, 800);
      image(objeto[17], 600, 400, 200, 200);// imagen boton
      push();
      fill(255, 197, 49);
      rect(0, 0, 400, 100);
      pop();
      push();
      fill(0);
      textSize(20);
      text( "Los Osos llegaron, hay que Escapar!", 36, 15, 350, 100 );
      pop();
    }

    //estado 8
    else if (this.estado == 8) {
      //agrego la imagen y elementos narrativos de cada pantalla
      image(fondo[10], 0, 0, 800, 800);
      image(objeto[17], 600, 400, 200, 200);// imagen boton
      push();
      fill(255, 197, 49);
      rect(0, 0, 400, 100);
      pop();
      push();
      fill(0);
      textSize(20);
      text( "Empieza el mini juego, ¿Listo?\n Llega antes que el oso", 36, 15, 350, 100 );
      pop();
    }

    //estado 9
    else if (this.estado == 9) {
      //mini juego
      juego.draw();
    }

    //estado 10
    else if (this.estado == 10) {
      //agrego la imagen y elementos narrativos de cada pantalla
      image(fondo[12], 0, 0, 800, 800);
      image(objeto[17], 600, 400, 200, 200);// imagen boton
      push();
      fill(255, 197, 49);
      rect(0, 0, 400, 100);
      pop();
      push();
      fill(0);
      textSize(50);
      text( "GANASTE", 36, 15, 350, 100 );
      pop();
    }
    //estado 11
    else if (this.estado == 11) {
      //agrego la imagen y elementos narrativos de cada pantalla
      image(fondo[4], 0, 0, 800, 800);
      image(objeto[17], 600, 400, 200, 200);// imagen boton
      push();
      fill(255, 197, 49);
      rect(0, 0, 400, 100);
      pop();
      push();
      fill(0);
      textSize(50);
      text( "PERDISTE", 36, 15, 350, 100 );
      pop();
    }
  }

  paso() { //programo los botones uno por uno
    if ((mouseX > 100 && mouseX < 100 + 120 && mouseY > 200 && mouseY < 200 + 50) && (this.estado == 0)) {
      this.estado = 9;
    }
    if ((mouseX > 600 && mouseX < 600 + 200 && mouseY > 400 && mouseY < 400 + 200) && (this.estado == 0)) {
      this.estado = 1;
    } else if ((mouseX > 600 && mouseX < 600 + 200 && mouseY > 400 && mouseY < 400 + 200) && (this.estado == 1)) {
      this.estado = 2;
    } else if ((mouseX > 0 && mouseX < 0 + 200 && mouseY > 400 && mouseY < 400 + 200) && (this.estado == 1)) {
      this.estado = 11;
    } else if ((mouseX > 600 && mouseX < 600 + 200 && mouseY > 400 && mouseY < 400 + 200) && (this.estado == 2)) {
      this.estado = 3;
    } else if ((mouseX > 600 && mouseX < 600 + 200 && mouseY > 400 && mouseY < 400 + 200) && (this.estado == 3)) {
      this.estado = 4;
    } else if ((mouseX > 600 && mouseX < 600 + 200 && mouseY > 400 && mouseY < 400 + 200) && (this.estado == 4)) {
      this.estado = 5;
    } else if ((mouseX > 600 && mouseX < 600 + 200 && mouseY > 400 && mouseY < 400 + 200) && (this.estado == 5)) {
      this.estado = 6;
    } else if ((mouseX > 600 && mouseX < 600 + 200 && mouseY > 400 && mouseY < 400 + 200) && (this.estado == 6)) {
      this.estado = 7;
    } else if ((mouseX > 600 && mouseX < 600 + 200 && mouseY > 400 && mouseY < 400 + 200) && (this.estado == 7)) {
      this.estado = 8;
    } else if ((mouseX > 600 && mouseX < 600 + 200 && mouseY > 400 && mouseY < 400 + 200) && (this.estado == 8)) {
      this.estado = 9;
    } else if ((mouseX > 600 && mouseX < 600 + 200 && mouseY > 400 && mouseY < 400 + 200) && (this.estado == 11)) {
      this.estado = 0;
    } else if ((mouseX > 600 && mouseX < 600 + 200 && mouseY > 400 && mouseY < 400 + 200) && (this.estado == 10)) {
      this.estado = 0;
    }
  }
}
