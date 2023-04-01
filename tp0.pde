//tp0 Ariana César (91314/7)
//Autoretrato

//variable
PImage Foto;

void setup (){
  //pantalla
size (800, 400);
//Carga de imagen
Foto = loadImage("data/Foto.jpg");


}
 void draw (){
 background (0);
  image(Foto,400,0,400,400);
  //pelo fondo
 noStroke();
 fill(34,63,175);
 ellipse (200,200,300,350);
 ellipse(80,200,90,300);
 ellipse(100,200,90,300);
 ellipse (320,200, 90,300);
 ellipse (200,50,300,100);
 ellipse(50,70,60,80);
 ellipse(350,70,60,80);
 ellipse(50,200,90,300);
 //cabeza
 fill (247,211,192);
 ellipse (200,200,300,300); 
 //lentes
 fill (149,184,255, 100);
 ellipse (270, 150, 100,100);
 ellipse (130, 150, 100,100); 
 //ojos
 fill (67,22,0);
 ellipse (270, 150, 60,60);
 ellipse (130, 150, 60,60);
 fill(0);
 ellipse (270, 150, 30,30);
 ellipse (130, 150, 30,30);
 //brillo de ojos
 fill (255);
 ellipse (260, 130, 40,30);
 ellipse (120, 130, 40,30);
 //activo lineas
 stroke(5);
 //linea de lentes
 strokeWeight(4);
  line (180,150,220,150);
 //cejas
 line (100, 100, 190,100);
 line (230, 100, 300,100);
 //nariz
 line (190,100, 230,200);
 line(230,200, 200,200);
 //boca
 strokeWeight(8);
 line (200, 270, 150,240);
  //pelo de (flequillo)
 noStroke();
 fill(34,63,175);
 ellipse (230,70, 50,80);
 ellipse (270,80, 50,100);
 ellipse (300,130, 50,180);
 ellipse (340,200, 90,270);
 //pelo iz
 ellipse (170,70, 50,80);
 ellipse (140,80, 50,100);
 ellipse (120,80, 50,90);
 ellipse (70,200, 90,270);

 
 }
