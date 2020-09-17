
let angle = 20;

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

//base line
strokeWeight(5);
stroke(51);
line(500, 420, 100, 420);

  //dial
strokeWeight(0.8);
fill(204, 0, 0);
circle(300, 300, 200);
fill(255);
circle(300, 300, 180);

// rotate motion
rectMode(CENTER);
translate(width / 450, height / 450);
translate(p5.Vector.fromAngle(millis() / 900, 15));

  // dialcenter(yellow)
strokeWeight(0.8);
fill(251, 226, 23);
circle(300, 300, 10);

  //hands
strokeWeight(0);
fill(0);
ellipse(330, 300, 67, 3.5);
ellipse(300, 270, 4, 70);

//number dots (yellow)
strokeWeight(0.8);
fill(251, 226, 23);

circle(233, 300, 7);
circle(370, 300, 7);
circle(300, 230, 7);
circle(300, 370, 7);
  }
