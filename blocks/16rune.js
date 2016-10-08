var r = new Rune({ container: "body", width: 1200, height: 800, debug: false });



function randomColor() {
  return new Rune.Color('hsv', Rune.random(180, 360), Rune.random(0, 80), Rune.random(0, 100));
}

function wood() {
  var shadow = r.polygon(0, 0).lineTo(256,438).lineTo(390,432).lineTo(447, 572).lineTo(501, 640).lineTo(500, 638).lineTo(828, 629).lineTo(862, 605).lineTo(880, 627).lineTo(410, 715)
  				.fill(155,150,155,0.33)
  				.stroke(false);

  var x = 200, y = 100;

  var p1 = r.polygon(x, y).lineTo(250, 249).lineTo(257, 0).lineTo(109, 133).lineTo(216, 340);
  var p2 = r.polygon(x, y).lineTo(250, 249).lineTo(216,340).lineTo(300, 539).lineTo(350, 500);
  var p3 = r.polygon(x, y).lineTo(216, 340).lineTo(109, 133).lineTo(246,469).lineTo(300,539);
  var p4 = r.polygon(x, y).lineTo(257, 0).lineTo(250, 249).lineTo(694, 231).lineTo(607, 111);
  var p5 = r.polygon(x, y).lineTo(250, 249).lineTo(709, 265).lineTo(694, 231);
  var p6 = r.polygon(x, y).lineTo(250, 249).lineTo(350,500).lineTo(675,490).lineTo(709, 265);
  var p7 = r.polygon(x, y).lineTo(350,500).lineTo(675,490).lineTo(629, 528).lineTo(300, 539);
  var polys = [p1,p2,p3,p4,p5,p6,p7];
  var brightnesses = [0.7, 0.6, 0.55, 0.9, 0.85, 0.83, 0.45, 0.25];
  

   for (var i = 0; i < polys.length; i++) {
    var gamma = 2.05;
    var darkness = 1 - Math.pow(brightnesses[i], gamma);
    var alphaMin = darkness * 1.2;
    var alphaVariation = darkness * 0.2 + 0.05;

    polys[i].fill(randomColor(),0.1);
    polys[i].copy().fill(false).strokeWidth(0.1).stroke(255);
    polys[i].copy().fill(false).strokeWidth(0.5).stroke(255);
  }

   //   //polys[i].fill(brightnesses[i] * 255);
   //   //polys[i].fill(230,0.7).autoFillHatchLines(brightnesses[i]);
   //   polys[i].copy().fill(false).strokeWidth(0.4).stroke(58);
   //   polys[i].copy().fill(false).strokeWidth(0.1).stroke(30);
   // }
}


// function _fillHatchLines(p, step, angle, drawLine) {
//   // create rotated polygon vertices
//   var vs = p.vars.vectors.map(function(v) { return v.rotate(angle); });

//   // create a copy for applying rotation 
//   var pr = p.copy(); 
//   pr.removeParent();
//   pr.vars.vectors = vs;

//   // get bounds of rotated polygon
//   var bounds = pr.bounds(); 

//   // create group for fill lines
//   var g = r.group(p.vars.x, p.vars.y); 

//   // scan pixels vertically
//   for (var line = bounds.y; line < bounds.y + bounds.height; line += step) { 
//     var ixs = [];
//     // enumerate edges
//     for (var i = 0; i < vs.length; i++) {
//       var from = vs[i];
//       var to = vs[(i + 1) % vs.length];
//       if (from.y < line && to.y > line) {
//         var swp = from; var from = to; var to = swp;
//       }
//       if (from.y > line && to.y < line) {
//         var x = from.x + (from.y - line) * (to.x - from.x) / (from.y - to.y);
//         var ix = new Rune.Vector(x, line);
//         ix = ix.rotate(-angle);
//         ixs.push(ix);
//       }
//     }
//     // assuming convex polygons
//     // TODO: implement for concave polygons
//     if (ixs.length >= 2) {
//       // hatch line callback
//       drawLine(ixs[0], ixs[1], g);
//     }
//   }
// }

// Rune.Polygon.prototype.fillHatchLines = function(step, angle, drawLine) {
//   _fillHatchLines(this, step, angle, drawLine);
//   return this;
// };

// Rune.Polygon.prototype.autoFillHatchLines = function(brightness) {
//   var gamma = 1.05;
//   var darkness = 1 - Math.pow(brightness, gamma);
//   var step = 1;
//   var strokeWidth = darkness * 2;
//   var alphaMin = darkness * 0.5;
//   var alphaVariation = darkness * 0.2 + 0.05;

//   this.fillHatchLines(step, 90, function(a, b, g) {
//     r.line(a.x, a.y, b.x, b.y, g).strokeWidth(strokeWidth).stroke(0,0,0, Rune.random(alphaMin, alphaMin + alphaVariation));
//   });
//   return this;
// };


(function() {
  wood();
  r.draw();
  r.on('mousemove', function(mouse) {
  console.log("the mouse moved to", mouse.x, mouse.y);
});
})();