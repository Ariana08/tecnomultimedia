function pJugando() {
  background(0);
  image(fondo0, 0, 0, 600, 600)
  dibujarPj();
  dibujarObjeto();
  //dibujo interfaz
  push();
  fill(255);
  textSize(14);
  textAlign(CORNER);
  text("COMÍ: " + puntos, 20, 20);
  text("PERDÍ: " + errores, 20, 40);
  pop();

  //comportamiento del enemigo
  oby += obvely;
  if ( oby > width+obr ) {
    oby = -obr-random(50, 100);
    obx = random( obr, width-obr);

    //ademas agrego uno a la cuenta de caidas:
    errores++;
    if (  errores>=3 ) {
      //perdi:
      estado = 2;
    }
  }

  //Evaluo colision
  if ( dist(pjx, pjy, obx, oby) <= obr + pjr  ) {

    //reinicio la ubicacion del enemigo:
    obx = random(obr, width-obr);
    oby = -obr-random(50, 100);

    //aumento uno en la cuenta de "atrapados":
    puntos++;

    //evalua si gano al alcanzar la cuenta:
    if ( puntos==5 ) {
      //gano: (cambia de estado)
      estado = 3;
    }
  }
}
function keyPressed() {
  if ( estado==1 ) {
    //Mueve al pj
    if ( keyCode === LEFT_ARROW ) {
      pjx -= 10;
    }
    if ( keyCode === RIGHT_ARROW) {
      pjx += 10;
    }
  }
}
