

var r = new Rune({
  container: "body",
  width: 800,
  height: 800,
  debug: true
}); 

var size = 30;
var radius = 80;
var points =[6,6,6,6];
var numPolys= 30;
var pradius=80;
var angle = 360/numPolys;
var randi = r.random(2,40);
var locations =[22,23,24,25,26,27,28];

// var bg = r.rect(0,0,r.width,r.height)
//           .fill(240)
//           .stroke(false);

var colorlist = [
  new Rune.Color(192, 57, 43),
  new Rune.Color(136, 78, 160),
  new Rune.Color(36, 113, 163),
  new Rune.Color(26, 188, 156),
  new Rune.Color(241, 196, 15),
  new Rune.Color(211, 84, 0),
  new Rune.Color(211, 84, 0),
  new Rune.Color(97, 106, 107),
  new Rune.Color(33, 47, 60),
]

function randomColor() {
  var index = Math.round(Rune.random(colorlist.length-1));
  return colorlist[index];
}

for(var i = 0; i < locations.length; i++){
 for(var j = 0; j < locations[i]; j++){
  var group = r.group(r.width/2,r.height/2);

  for (var p=0; p < numPolys; p++){
  var px = Math.cos(Rune.radians(p*angle))*pradius;
  var py = Math.sin(Rune.radians(p*angle))*pradius;

  var rect =r.rect(px,py,180,18,group)
   .move(randi+j,randi,true)
   .stroke(false)
   .fill(randomColor())
   .rotate(p * angle, 0, 0, true);
   }
  }
}



// for(var g = 0; g < 100; g++){
//   var x = Rune.random(50, r.width-50);
//   var y = Rune.random(50, r.height-50);
  


// for(var i =0; i<points.length; i++){

//   var shapeabove = r.polygon(r.width/3,225 + (i * 160));
//   var shapebelow = r.polygon(80 + (i * 160), r.width/2);
//   var spacing = 360/points[i]; // array of points listed 

//   for (var j =0; j <points[i]; j++){ // j here is degree value to display rotation
//     var x = Math.cos(Rune.radians(j*spacing))*radius;
//     var y = Math.sin(Rune.radians(j*spacing))*radius;


//     shapeabove.lineTo(x,y);
//     shapebelow.lineTo(x,y);
//     shapeabove.stroke(false);
//     shapebelow.stroke(false);

//     shapeabove.fill(245, 203, 167);
//     shapebelow.fill(229, 232, 232);

//   }
// }

r.draw();