void ilusionOptica () {
  rectMode (CENTER);
  for ( int i = 400; i> 0; i-=35 ) {
    if (i%2==0) {
      fill (0);
    } else {
      fill (255);
    }
    rect (600, 200, i, i);
  }
  //Invertir colores
  rectMode (CORNER);
  push();
  blendMode (DIFFERENCE);
  fill (255);
  rect(400, 0, 200, 200);
  rect(600, 200, 200, 200);
  pop();
}
