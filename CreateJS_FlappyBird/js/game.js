var stage, loader, flappy;


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
  createFlappy();
  createPipes();

  //add listeners... 
  stage.on("stagemousedown", jumpFlappy);
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

    //add animation to the cloud before adding it to the stage... 

    var dxnIndex = i % 2 == 0 ? -1 : 1;
    var originalX = cloud.x;

    createjs.Tween.get(cloud, {loop: true})
            .to({x: cloud.x - (200 * dxnIndex)}, 3000, createjs.Ease.getPowInOut(2))
            .to({x: originalX}, 3000, createjs.Ease.getPowInOut(2));


    stage.addChild(cloud);
  }

  //stage.update();
}


function createFlappy(){
  flappy = new createjs.Bitmap(loader.getResult('flappy'));
  flappy.regX = flappy.image.width / 2;
  flappy.regY = flappy.image.height / 2 ; 
  flappy.x = stage.canvas.width / 2; 
  flappy.y = stage.canvas.height / 2;
  stage.addChild(flappy);
}


function jumpFlappy(){
  //y goes from up to down.... 
  createjs.Tween.get(flappy, {override: true})    //override means cancel the previous tween if overlaps exist.
      .to({y:flappy.y - 60, rotation: -15}, 500, createjs.Ease.getPowOut(2))
      .to({y: stage.canvas.height + (flappy.image.width/2), rotation: 30}, 1500, createjs.Ease.getPowIn(2))
      .call(gameOver);

}


function createPipes(){
  var topPipe, bottomPipe;
  var position = Math.floor(Math.random() * 280 + 100); //280 -gap. 

  topPipe = new createjs.Bitmap(loader.getResult('pipe'));
  topPipe.y = position - 75;
  topPipe.x = stage.canvas.width / 2; //set in middle.. 
  topPipe.rotation = 180;
  topPipe.name = 'pipe';


  bottomPipe = new createjs.Bitmap(loader.getResult('pipe'));
  bottomPipe.y = position + 75;
  bottomPipe.x = stage.canvas.width / 2; 
  bottomPipe.skewY = 180;  //skewObject on X axis. 
  bottomPipe.name = "pipe"; 


  topPipe.regX = bottomPipe.regX = topPipe.image.width / 2 ; 

  stage.addChild(bottomPipe, topPipe)
}


const gameOver = () => console.log('game over... ')