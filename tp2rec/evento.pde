void evento () {
  push();
  blendMode (DIFFERENCE);
  noStroke();
  fill (colRandom());
  ellipse( mouseX, mouseY, 200, 200);
  pop();
}
