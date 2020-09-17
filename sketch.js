let boxX = 10;
let speed = 2;
let boxY = 180;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(250);

 strokeWeight(1);
stroke(51);

  //handle
strokeWeight(0.8);
fill(204, 0, 0);
circle(300, 220, 150);
fill(255);
circle(300, 220, 140);

  //ears
strokeWeight(0.8);
fill(204, 0, 0);
circle(222, 225, 70);
circle(370, 225, 70);

    //legs
strokeWeight(1.5);
fill(204, 0, 0);
push()
translate(180,200)
rotate(-208)
ellipse(10,200,7,170);
pop()

push()
translate(280,370)
rotate(-210)
ellipse(10,0,7,123);
pop()


  //dial
strokeWeight(0.8);
fill(204, 0, 0);
circle(300, 300, boxY+20);
fill(255);
circle(300, 300, boxY);

if (boxY > width || boxY < 0) {
  speed = speed*-1;
}
boxY = boxY + speed;

  // numbersigns
strokeWeight(0.8);
fill(251, 226, 23);
circle(300, 300, boxX);
fill(251, 226, 23);
circle(233, 300, 7);
circle(370, 300, 7);
circle(300, 230, 7);
circle(300, 370, 7);

if (boxX > width || boxX < 0) {
  speed = speed*-1;
}
boxX = boxX + speed;

  //hands
strokeWeight(0);
fill(0);
ellipse(330, 300, 67, 3.5);
ellipse(300, 270, 4, 70);

strokeWeight(5);
stroke(51);
line(500, 420, 100, 420);

  }
