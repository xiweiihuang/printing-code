var r = new Rune({
  container: "body",
  width: 1000,
  height: 1000
});

//canvas
var bg = r.rect(0,0, r.width, r.height).fill(false).stroke(true);

//--------first combination---------//

// //body rects
// var rect = r.rect(r.width/9, 4*r.height/10,200,200).fill(34, 181, 186).stroke(false);
// var rect = r.rect(3*r.width/9, 4*r.height/10,200,200).fill(214, 75, 5).stroke(false);
// var rect = r.rect(5*r.width/9, 4*r.height/10,200,200).fill(18, 46, 97).stroke(false);
// var rect = r.rect(7*r.width/9, 4*r.height/10,200,200).fill(39, 69, 9).stroke(false);
// //edge rects
// var rect = r.rect(r.width/9, 4*r.height/10-20,200,20).fill(255,0,0).stroke(false);
// var rect = r.rect(r.width/9, 4*r.height/10+200,200,20).fill(255,0,0).stroke(false);
// var rect = r.rect(3*r.width/9, 4*r.height/10-20,200,20).fill(255, 228, 74).stroke(false);
// var rect = r.rect(3*r.width/9, 4*r.height/10+200,200,20).fill(255, 228, 74).stroke(false);
// var rect = r.rect(5*r.width/9, 4*r.height/10-20,200,20).fill(243, 164, 203).stroke(false);
// var rect = r.rect(5*r.width/9, 4*r.height/10+200,200,20).fill(243, 164, 203).stroke(false);
// var rect = r.rect(7*r.width/9,4*r.height/10-20,200,20).fill(250, 152, 41).stroke(false);
// var rect = r.rect(7*r.width/9,4*r.height/10+200,200,20).fill(250, 152, 41).stroke(false);

// //--------second combination---------//
// //body rects
// var rect = r.rect(r.width/9, 4*r.height/10,200,200).fill(255).stroke(true).strokeWidth(0.1);
// var rect = r.rect(3*r.width/9, 4*r.height/10,200,200).fill(214, 75, 5).stroke(false);
// var rect = r.rect(5*r.width/9, 4*r.height/10,200,200).fill(255, 228, 74).stroke(false);
// var rect = r.rect(7*r.width/9, 4*r.height/10,200,200).fill(0).stroke(false);

// //edge rects
// var rect = r.rect(r.width/9, 4*r.height/10-20,200,20).fill(214, 75, 5).stroke(false);
// var rect = r.rect(r.width/9, 4*r.height/10+200,200,20).fill(214, 75, 5).stroke(false);
// var rect = r.rect(3*r.width/9, 4*r.height/10-20,200,20).fill(255).stroke(false).stroke(true).strokeWidth(0.1);
// var rect = r.rect(3*r.width/9, 4*r.height/10+200,200,20).fill(255).stroke(false).stroke(true).strokeWidth(0.1);
// var rect = r.rect(5*r.width/9, 4*r.height/10-20,200,20).fill(255).stroke(false).stroke(true).strokeWidth(0.1);
// var rect = r.rect(5*r.width/9, 4*r.height/10+200,200,20).fill(255).stroke(false).stroke(true).strokeWidth(0.1);
// var rect = r.rect(7*r.width/9, 4*r.height/10-20,200,20).fill(214, 75, 5).stroke(false);
// var rect = r.rect(7*r.width/9, 4*r.height/10+200,200,20).fill(214, 75, 5).stroke(false);


// //--------blue,red and white grid---------//

var sizex = 204;
var sizey = 133;
var gridWidth =20;
var odd=[1,3,5];
var even =[2,4,6];


for(var x=0; x <6; x++){
	for(var y=0; y<7; y++){

var grid =r.rect(sizex/2,-10,sizex*x-102, sizey*y)
		   .fill(false)
		   .stroke(16, 30, 169)
		   .strokeWidth(gridWidth);


//-------------1 row---------------//
var rect_red = r.rect(sizex/2+gridWidth/2,0,sizex/2-gridWidth, sizey-gridWidth)
				.fill(255,0,0)
				.stroke(false);
var rect_red = r.rect(2*sizex+gridWidth/2,0,sizex-gridWidth,sizey-gridWidth)
				.fill(255,0,0)
				.stroke(false);
var rect_red = r.rect(4*sizex+gridWidth/2,0,sizex-gridWidth,sizey-gridWidth)
				.fill(255,0,0)
				.stroke(false);


//-------------2 row---------------//
var rect_red = r.rect(sizex+gridWidth/2,sizey,sizex-gridWidth,sizey-gridWidth)
				.fill(255,0,0)
				.stroke(false);
var rect_red = r.rect(3*sizex+gridWidth/2,sizey,sizex-gridWidth,sizey-gridWidth)
				.fill(255,0,0)
				.stroke(false);


//-------------3 row---------------//
var rect_red = r.rect(sizex/2+gridWidth/2,2*sizey,sizex/2-gridWidth, sizey-gridWidth)
				.fill(255,0,0)
				.stroke(false);
var rect_red = r.rect(2*sizex+gridWidth/2,2*sizey,sizex-gridWidth,sizey-gridWidth)
				.fill(255,0,0)
				.stroke(false);
var rect_red = r.rect(4*sizex+gridWidth/2,2*sizey,sizex-gridWidth,sizey-gridWidth)
				.fill(255,0,0)
				.stroke(false);


//-------------4 row---------------//
var rect_red = r.rect(sizex+gridWidth/2,3*sizey,sizex-gridWidth,sizey-gridWidth)
				.fill(255,0,0)
				.stroke(false);
var rect_red = r.rect(3*sizex+gridWidth/2,3*sizey,sizex-gridWidth,sizey-gridWidth)
				.fill(255,0,0)
				.stroke(false);


//-------------5 row---------------//
var rect_red = r.rect(sizex/2+gridWidth/2,4*sizey,sizex/2-gridWidth, sizey-gridWidth)
				.fill(255,0,0)
				.stroke(false);
var rect_red = r.rect(2*sizex+gridWidth/2,4*sizey,sizex-gridWidth,sizey-gridWidth)
				.fill(255,0,0)
				.stroke(false);
var rect_red = r.rect(4*sizex+gridWidth/2,4*sizey,sizex-gridWidth,sizey-gridWidth)
				.fill(255,0,0)
				.stroke(false);


//-------------6 row---------------//
var rect_red = r.rect(sizex+gridWidth/2,5*sizey,sizex-gridWidth,sizey-gridWidth)
				.fill(255,0,0)
				.stroke(false);
var rect_red = r.rect(3*sizex+gridWidth/2,5*sizey,sizex-gridWidth,sizey-gridWidth)
				.fill(255,0,0)
				.stroke(false);


//to cover the edge grid

var edge = r.rect(sizex/2-gridWidth/2,0.5,20,r.height-10).fill(255).stroke(false);
var edge = r.rect(sizex/2,6*sizey-gridWidth,r.width-93.5,20).fill(255).stroke(false);
var edge = r.rect(sizex/2+gridWidth/2,0.5,1,r.height-222).stroke(200);
var edge = r.rect(sizex/2+gridWidth/2,6*sizey-gridWidth,r.width-92.5,1).stroke(200);

	}
}


r.draw();


