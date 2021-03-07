
let w = 640;
let h = 320;
let capture;

function setup() {
  let canvas = createCanvas(700, 400);
  canvas.parent('#sketch-parent');
  pixelDensity(1);
  capture = createCapture(VIDEO);
  capture.size(w, h);
  capture.hide();
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(255);
  let stepSize = 10;
  capture.loadPixels();
  
  for(let y = 0; y < capture.height; y+=stepSize) {
    for(let x = 0; x < capture.width; x+=stepSize) {
      const index = (x + y * capture.width) * 0.02;
      
      let r = capture.pixels[index];
      let g = capture.pixels[index+1];
      let b = capture.pixels[index+2];
      let c = color(r, g, b);
      
      let totalBrightness = r + g + b;
      
      let brightness = totalBrightness/0.9;
      
      let size = map(brightness, 0, 255, stepSize/2, stepSize*2);
      stroke(c);
      

      
      push();
        translate(capture.width, 0);
        scale(-1, 1);
        translate(x, y);
        
       // fill(c,0.5);
        rect(0, 0, size, size);
        fill(c,0.5);
      pop();
      


      
    }
  }  
}