var r = new Rune({
  container: "body",
  width: 600,
  height: 800,
  debug: true
});

var bg = r.rect(0,0,r.width,r.height) 
          .fill(40, 180, 99,0.5)//post background
          .stroke(false);
var group1 = r.group(7*r.width/10,r.height/10);
var group2 = r.group(0, 11*r.height/15);
var group3 = r.group(25, 11*r.height/15);
var group4 = r.group(10, 9*r.height/15);


for(var x =0; x<20; x++){
  for (var y =0; y <1; y++){ // j here is degree value to display rotation
    var city1 = r.rect(x*33,y*70,35,2,group4)//rooftop   
	            .fill(15, 69, 38)
	            .stroke(false)
	            .move(Rune.random(0,2),Rune.random(-25,10) , true);

	var city2 =r.rect(x*33,y*70,0.5,100,group4) //vertical line
	            .fill(15, 69, 38)
	            .stroke(false)
	            .move(Rune.random(0,2),Rune.random(-25,10) , true);
	            

    var whitekey = r.rect(x*33,y*100,28,100,group2)
			.fill(40, 180, 99,0.7)
			.stroke(false);

	var blackkey = r.rect(x*33,y*100,13,70,group3)
					.fill(15, 69, 38)
					.stroke(false);

	if(x == 2||x == 6||x ==9 ||x ==13 || x ==16)
	      {
	        blackkey.fill(40, 180, 99,0.5);
	      }
	      else
	      {
	        blackkey.fill(32, 64, 33);
	      }

 }
}

var wtc1 = r.triangle(398,423,410,410,402,595).fill(15, 69, 38).stroke(false);
var wtc2 = r.triangle(410,410,402,595,420,595).fill(183, 249, 211).stroke(false);
var wtc3 = r.triangle(410,410,420,420,421,595).fill(0).stroke(false);
var line = r.line(410,410,410,300).fill(0);

// var golden = (1 + Math.sqrt(5)) / 2;

var text=r.text("The Phil Concert",30,10, group1)
  text.fill(249, 244, 100)
  .stroke(false)
  .fontSize(32)
  .textAlign("center")
  .fontFamily("Helvetica")
  .textDecoration("underline")
  .fontWeight("bold")
  // .rotate(90, 0, 0);

// var text2 = text
//   .copy()
//   .move(0, -30,true);

// var text3 = text2
//   .copy()
//   .move(0,-30,true);

var text4=r.text("Central Park@8pm",55,40, group1)
  text4.fill(255,0.8)
  .stroke(false)
  .fontSize(22)
  .textAlign("center")
  .fontFamily("Helvetica")
  // .textDecoration("underline")
  .fontWeight("normal")
  // .rotate(90, 0, 0);



r.draw();