function setup() {
  createCanvas(windowWidth, windowHeight);
  background(random(256));
}

function draw() {
  for (var i = 0; i < 2; ++i) {
    var a = {x: random(width), y: random(height)};
    var b = {x: random(width), y: random(height)};
    fill(color(random(256), random(256), random(256)));
    stroke(color(random(256), random(256), random(256)));
    (i ? rect : line)(a.x, a.y, b.x, b.y);
  }
}
