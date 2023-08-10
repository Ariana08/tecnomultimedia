//Ariana Cesar 91314/7
// video : https://youtu.be/NvDPcsgjF2c
PImage f;
boolean ev;
void setup () {
  size (800, 400);
  f = loadImage("f.jpg");
}
void draw () {
  background (0);
 image(f, 0, 0, 400, 400);
  ilusionOptica();
  if (ev) {
    evento();
  }
}
void mousePressed () {
  ev = !ev;
}
