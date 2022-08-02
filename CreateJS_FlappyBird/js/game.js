var stage, loader


function init(){
  // Create your red square
  stage = new createjs.StageGL("gameCanvas");

  //add Ticker - frameRate Timer.. 
  createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;   //target a certain framerate. 
  createjs.Ticker.framerate = 60;                             //now you set it to 60fps. 
  createjs.Ticker.addEventListener("tick", stage);   //automatically calls the stage.update(). 


  //beginLinearGradientFill([colors], [percentages], angle, angle, angle, height)
  var bgColorGFX = new createjs.Graphics().beginLinearGradientFill(["#2573BB","#6CB8DA", "#567A32"], [0, .85, 1], 0, 0, 0, 480).drawRect(0, 0, 320, 480);
  var bg = new createjs.Shape().set({graphics: bgColorGFX});
      bg.x = 0; 
      bg.y = 0;
      bg.name = "background";
      bg.cache(0, 0, 320, 480);  //you have to cache if using stageGL.. 

      stage.addChild(bg);
      //stage.update();       //background is set... 


      //load the images.... using preload.js 
      var manifest = [
        {"src":"cloud.png", "id":"cloud" },
        {"src":"flappy.png", "id":"flappy" },
        {"src":"pipe.png", "id":"pipe" }
      ];

      //initialize the loader...
      loader = new createjs.LoadQueue(true); 
      loader.addEventListener("complete", onAssetLoadComplete);
      loader.loadManifest(manifest, true, "./imgs/");
}

function onAssetLoadComplete(){
  createClouds();
}

//so bitmaps - extends DisplayObject and needs no caching.. 
//things on the stage will display in the order you add them... 
//add background first. 
//then add objects on them. 


function createClouds(){
  let pos = [[40, 20],[140, 70], [100, 130]];
  var clouds = [];
  for(var i=0;i<3; i++){
    let cloud = new createjs.Bitmap(loader.getResult('cloud'));
    clouds.push(cloud);
    //position them. 
    cloud.x = pos[i][0];
    cloud.y = pos[i][1];
    stage.addChild(cloud);
  }

  //stage.update();
}