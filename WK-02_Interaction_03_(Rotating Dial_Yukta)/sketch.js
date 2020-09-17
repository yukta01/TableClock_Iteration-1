let angle = 0;

function setup() {
  createCanvas(600, 600);
  angleMode(RADIANS);
}

function draw() {
  background(250);
  rectMode(CENTER)
  noStroke();

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

  //BASE legs
  strokeWeight(1.5);
  fill(204, 0, 0);

  push()
  translate(180, 200)
  rotate(-208)
  ellipse(10, 200, 7, 170);
  pop()

  push()
  translate(280, 370)
  rotate(-210)
  ellipse(10, 0, 7, 123);
  pop()

  //dial
  strokeWeight(0.8);
  fill(204, 0, 0);
  circle(300, 300, 200);
  fill(255);
  circle(300, 300, 180);

  //BASE
  strokeWeight(5);
  stroke(51);
  line(500, 420, 100, 420);

  // numbersigns
  strokeWeight(0.8);
  fill(251, 226, 23);
  circle(300, 300, 10);
  fill(251, 226, 23);
  circle(233, 300, 7);
  circle(370, 300, 7);
  circle(300, 230, 7);
  circle(300, 370, 7);

  //hands
  strokeWeight(0);
  fill(0);

  //NEW ADDITION (ROTATE)

  push();
  angleMode(RADIANS);
  translate(width /2, 300);
  rotate(angle/100);
  ellipse(25, 0, 65, 3.5);
  pop();

  push();
  angleMode(RADIANS);
  translate(width /2 , 300);
  rotate(angle/500);
  ellipse(0, 30, 4, 78);
  pop();

  angle++;

}
