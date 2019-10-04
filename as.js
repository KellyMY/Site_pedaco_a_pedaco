float X,Y;
int i,fc;

void setup() {
  size(800,400);
  background(100,130,190);
  X = width/2;
  Y = height/2;
  i = 0;
  fc = 0;
  noStroke();
  smooth();
}

void draw() {
  for (i=0;i<25;i++){
  fc++;
  X += sin(fc/400.0+2);
  Y += cos(fc/(200.0+sqrt(frameCount))+100.0);
  fill(X,Y,200);
  rect(X+150,Y-100, 40,150);
 }
}