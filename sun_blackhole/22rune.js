// This sketch requires you to add Rune.Noise to your HTML page:
// https://github.com/runemadsen/rune.noise.js

var r = new Rune({
  container: "body",
  width: 400,
  height: 600,
  debug: true
});

// draw background
r.rect(0, 0, r.width, r.height).fill(0);

var noise = new Rune.Noise().noiseDetail(0.5);
var numPoints = 300;
var layers1 =7;
var layers2 =8;
var pointDegree = 360 / numPoints;
var radius = 40;
var noiseStep = 0;

var noiseCircle = r.polygon(3*r.width/4, 3*r.height/4)
  .stroke(250)
  .fill(false)
  .strokeWidth(1.5);

for(var i = 0; i < numPoints; i++) {
  for (var j = 0; j < layers1; j++){
  var noiseRadius = (noise.get(noiseStep) * 80) + radius;  
  var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
  var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;
  noiseCircle.lineTo(x*j, y*j)
  noiseStep += 0.1;
    }
}

/*------------------等高线---------------------*/
// for (var j = 0; j < layers1; j++){
//   for(var i = 0; i < numPoints; i++) {
//   var gap=10;
//   var noiseRadius = (noise.get(noiseStep) * 30) + radius;  
//   var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
//   var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;
//   noiseCircle.lineTo(x*j, y*j)
//   noiseStep += 0.1;
//     }
// }

/////-----rims---------///////
// for(var i = 0; i < numPoints; i++) {

//   var noiseRadius = (noise.get(noiseStep) * 40) + radius;
//   var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
//   var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

//   noiseCircle.lineTo(x, y);
//   noiseStep += 0.1;
// }

// for(var j = 0; j < layers1; j++) {
// var distance=2;
// var c1 = noiseCircle.copy().move(-2*j*distance,3+j*distance,true);4
// }


r.draw();
