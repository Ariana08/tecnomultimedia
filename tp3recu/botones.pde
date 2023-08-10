void dibujaBoton(String s_, float x_, float y_, float ancho_, float alto_) {
  push();
  rect(x_, y_, ancho_, alto_, 70);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(15);
  text( s_, x_, y_, ancho_, alto_);
  pop();
}
