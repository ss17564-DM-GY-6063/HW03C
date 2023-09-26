function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  fill("black");
  randomSeed(25);

  pointsCount = 200;
  for(let idx = 0; idx < pointsCount / 2; idx += 1){
    let randomX1 = random(0, width);
    let randomY1 = random(0, height);
    let randomLength1 = random(5, 30);
    ellipse(randomX1, randomY1, randomLength1, randomLength1);

    let randomX2 = random(0, width);
    let randomY2 = random(0, height);
    let randomLength2 = random(10, 40);
    ellipse(randomX2, randomY2, randomLength2, randomLength2);
  
    line(randomX1, randomY1, randomX2, randomY2)
  }
}