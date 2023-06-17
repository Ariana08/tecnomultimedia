//tp2 Ariana cesar 91314/7
PImage f;
float max;
void setup () {
  size (800, 400);
  f = loadImage("f.jpg");
  max = 255;
}
void draw () {
  background (0);
  image(f, 0, 0, 400, 400);
  rectMode (CENTER);
  for ( int i = 400; i> 0; i-=35 ) {
    if (i%2==0) {
      fill (0);
    } else {
      fill (max);
    }
    rect (600, 200, i, i);
  }
  //Invertir colores
  rectMode (CORNER);
  push();
  blendMode (DIFFERENCE);
  fill (max);
  rect(400, 0, 200, 200);
  rect(600, 200, 200, 200);
  pop();
}
//circulo modificador
void mouseDragged () {
   push();
  blendMode (DIFFERENCE);
  noStroke();
  fill (random(max),random(max),random(max));
  ellipse( mouseX, mouseY , 200,200);
  pop();
}
