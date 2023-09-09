
// Dibujar al jugador
function dibujarPj() {
  push();
  imageMode(CENTER, CENTER);
  image(img2, pjx, pjy-20, 260, 260);
  pop();
}
// Dibujar al Objeto
function dibujarObjeto() {
  push();
  oby += obvely;
  imageMode(CENTER, CENTER);
  image(img1, obx, oby, obr*3, obr*3);
  pop();
}
