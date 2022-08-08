var stage, cw, ch, g;

function drawMapObject(){

   stage = new createjs.Stage("mapcanvas");

   cw = stage.canvas.width;
   ch = stage.canvas.height;

  createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;  
  createjs.Ticker.framerate = 60;   
  createjs.Ticker.addEventListener("tick", function(event){
    stage.update(event);
  });   


 drawMap();

}



function drawMap(){
    g = new createjs.Shape();
    g.graphics.setStrokeSize(1);
    g.graphics.beginStroke("white").moveTo(100, 100)
    .lineTo(800, 600)
    .lineTo(400, 200)
    .lineTo(900, 20);

   //g.graphics.endFill();
    stage.addChild(g); 

}