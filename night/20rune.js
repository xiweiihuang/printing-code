var r = new Rune({
  container: "body",
  width: 800,
  height: 500,
  debug: true
});

// draw background
r.rect(0, 0, r.width, r.height).fill(75).stroke(false);

var noise = new Rune.Noise().noiseDetail(6, 0.38);
noise.noiseSeed(5);
var noiseStep = 0.4;

var iceberg = r.polygon(r.width/2, 0).fill(0).stroke(false);

for(var degree = 0; degree <= 180; degree += 1) {

  var x = Math.cos(Rune.radians(degree)) * 420;
  var y = Math.sin(Rune.radians(degree)) * 100;

  if(degree > 10 && degree < 170) {
    y += noise.get(noiseStep) * 700;
  }

  iceberg.lineTo(x, y);
  noiseStep += 0.02;
}



////////////////Stars//////////////////
for(var i = 0; i < 80; i++) {
  r.circle(Rune.random(r.width), Rune.random(50,250), Rune.random(0.4,0.7)).stroke(false).fill(255);
}

/////////////////Moon//////////////////
var sun =r.circle(730,50,30).stroke(250, 232, 73).strokeWidth(1).fill(0); 



/////////////////celing///////////////
var noise = new Rune.Noise().noiseDetail(2, 0.58);
noise.noiseSeed(3);
var noiseStep = 0.03;

var celi = r.polygon(r.width/2, 0).fill(0).stroke(false);

 for(var degree = 0; degree <= 180; degree += 4) {
  var x = Math.cos(Rune.radians(degree)) * 720;
  var y = Math.sin(Rune.radians(degree)) * 40;

  if(degree > 10 && degree < 170) {
    y += noise.get(noiseStep) * 20;
  }

  celi.lineTo(x, y);
  noiseStep += 0.52;
}


r.draw();



