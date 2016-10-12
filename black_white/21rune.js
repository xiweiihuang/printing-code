var r = new Rune({
  container: "body",
  width: 600,
  height: 400
});

var bg = r.rect(0,0, r.width, r.height).fill(255).stroke(true).strokeWidth(0.5);

var size = 50;

for(var x = 0; x < r.width; x += size)
{
  for(var y = 0; y < r.height; y += size)
  {
    drawTile(x, y, size);
    r.rect(x + 18, y + 18, size - 36, size - 36)
      .stroke(255)
      .fill(30)
      .strokeWidth(1.2)
      .rotate(90, x + (size/2), y + (size/2));
  }
}

function drawTile(x, y, size)
{
  for(var i = 0; i < 3; i++)
  {
     r.polygon(x, y)
      .lineTo(0, 0)
      .lineTo(0, size)
      .lineTo(size,size)
      
      .fill(Rune.random(255), Rune.random(0.6))
      .rotate(i * 90, x, y)
      .stroke(false);

     r.polygon(x, y)
      .lineTo(0, 0)
      .lineTo(0, size)
      .lineTo(size,size)
      
      .fill(Rune.random(205), Rune.random(0.6))
      .rotate(i * 90, x, y)
      .stroke(false);    
  }
}

r.draw();