function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  translate(width / 2, height / 2);
  rotate(-90);
  background("#007f5f");
  let hr = hour();
  let min = minute();
  let sec = second();
  textSize(50);

  noFill();
  //seconds
  stroke("#f5cb5c");
  strokeWeight(8);

  let secondangle = map(sec, 0, 60, 0, 360);
  arc(0, 0, 350, 350, 0, secondangle);
  push();
  rotate(secondangle);
  pop();

  //minuits
  stroke("#333533");
  let minuteangle = map(min, 0, 60, 0, 360) + map(sec, 0, 60, 0, 6);
  arc(0, 0, 330, 330, 0, minuteangle);
  push();
  rotate(minuteangle);
  pop();

  //hours
  stroke("#e8eddf");
  let hourangle = map(hr, 0, 12, 0, 360) + map(min, 0, 60, 0, 6);
  arc(0, 0, 310, 310, 0, hourangle);
  push();
  rotate(hourangle);
  pop();

  let secangle = map(sec, 0, 60, 0, 360);
  strokeWeight();
  textFont("Futura");
  rotate(90);
  fill("white");
  text(hr + ":" + min + ":" + sec, -85, 15);
}
//e63946
//457b9d
//f1faee
//colors
//strokeweight
//edf2f4
//ef233c
//8d99ae
//batata
//f5cb5c
//333533
//e8eddf
