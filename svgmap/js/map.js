var stage, cw, ch, g;

function drawMapObject(){

   stage = new createjs.Stage("mapcanvas");

   cw = stage.canvas.width;
   ch = stage.canvas.height;

  createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;  
  createjs.Ticker.framerate = 60;   
  createjs.Ticker.addEventListener("tick", stage);   


 drawMap();

}



function drawMap(){
    g = new createjs.Shape();
    g.graphics.setStrokeStyle(1).beginStroke("white");
   // g.graphics.beginFill('0xff0000');
    g.graphics.moveTo(100, 100);
    g.graphics.lineTo(800, 100);
    g.graphics.lineTo(800, 800);
    
    g.graphics.endStroke();
   //g.graphics.endFill();
    stage.addChild(g); 

}