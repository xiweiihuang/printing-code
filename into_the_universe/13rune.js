var r = new Rune({
  container: "body",
  width: 1024,
  height: 568,
  debug: true
});

var bg = r.rect(0, 0, r.width, r.height).fill(0, 0, 0).stroke(false);

var colorlist = [
  new Rune.Color(186, 74, 0 ),
  new Rune.Color(179, 182, 183),
  new Rune.Color(131, 145, 146),
  new Rune.Color(189, 195, 199),
  new Rune.Color(214, 219, 223),
  new Rune.Color(242, 243, 244),
  new Rune.Color(213, 219, 219),
  new Rune.Color(174, 182, 191),
  new Rune.Color(234, 237, 237),
]

function randomColor() {
  var index = Math.round(Rune.random(colorlist.length-1));
  return colorlist[index];
}

var group = r.group(100, 225);

for(var x = 0; x < 390; x++)
  {
    for(var y = 0; y < 295; y++)
    {
      var circ = r.circle(x * 2, y * 5, 0.5, group)
        .stroke(false);

      // move it a random amount
      circ.move(Rune.random(-110, 220), Rune.random(-170, 320), true)
       .fill(randomColor());
      
    }
  }

r.draw();