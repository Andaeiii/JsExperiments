var stage, canvas;


function init(){
  // Create your red square
  stage = new createjs.StageGL("gameCanvas");

      //beginLinearGradientFill([colors], [percentages], angle, angle, angle, height)

  var bgColorGFX = new createjs.Graphics().beginLinearGradientFill(["#2573BB","#6CB8DA", "#567A32"], [0, .85, 1], 0, 0, 0, 480).drawRect(0, 0, 320, 480);
  var bg = new createjs.Shape().set({graphics: bgColorGFX});
      bg.x = 0; 
      bg.y = 0;
      bg.name = "background";
      bg.cache(0, 0, 320, 480);  //you have to cache if using stageGL.. 

      stage.addChild(bg);

      stage.update();
}