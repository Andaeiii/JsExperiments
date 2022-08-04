var stage, loader, tx, flappy;
var started = false;


var polygon; // to get an easier way to create collisions... 
var resetbtn;

function init(){
  // Create your red square
  stage = new createjs.Stage("gameCanvas");

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

      
      //add a click to play handler... 
      tx  = new createjs.Text("Click To Start", "20px Arial", "#ffffff");
      tx.x = stage.canvas.width - tx.width;
      tx.y = stage.canvas.height / 2; // - tx.height; 
      stage.addChild(tx);


      //load the images.... using preload.js 
      var manifest = [
        {"src":"cloud.png", "id":"cloud" },
        {"src":"flappy.png", "id":"flappy" },
        {"src":"resetbtn.png", "id":"reset" },
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
  //createPipes();   //remove create pipes.. and add it to the jumpFlappy function...

  //add listeners... 
  stage.on("stagemousedown", jumpFlappy);
  createjs.Ticker.addEventListener("tick", checkCollision);     //check collision.. 

  stage.addChild(polygon);
  
  doResetAction();
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

  polygon = new createjs.Shape();
}


function jumpFlappy(){
  if(!started){
    startGame();
  }
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
  topPipe.x = stage.canvas.width + (topPipe.image.width / 2); //set in middle.. 
  topPipe.rotation = 180;
  topPipe.name = 'pipe';


  bottomPipe = new createjs.Bitmap(loader.getResult('pipe'));
  bottomPipe.y = position + 75;
  bottomPipe.x = stage.canvas.width + (bottomPipe.image.width / 2); 
  bottomPipe.skewY = 180;  //skewObject on X axis. 
  bottomPipe.name = "pipe"; 


  topPipe.regX = bottomPipe.regX = topPipe.image.width / 2 ; 


  createjs.Tween.get(topPipe).to({x:0 - topPipe.image.width}, 10000).call(function(){
    removePipe(topPipe);
  });

  createjs.Tween.get(bottomPipe).to({x: 0 - bottomPipe.image.width}, 10000).call(function(){
    removePipe(bottomPipe);
  });


  stage.addChild(bottomPipe, topPipe)
}



function removePipe(pipe){
  stage.removeChild(pipe);
}

function startGame(){
  started = true;
  createPipes();
  setInterval(createPipes, 6000); //create pipes once every 6 minutes... 
}


function checkCollision(){
  var leftX = flappy.x - flappy.regX + 5; //let 5 - is forgiveness negligible. for the player. 
  var leftY = flappy.y - flappy.regY + 5;

  var points = [
    new createjs.Point(leftX, leftY),
    new createjs.Point(leftX + flappy.image.width - 10, leftY),
    new createjs.Point(leftX, leftY + flappy.image.height - 10),
    new createjs.Point(leftX + flappy.image.width - 10, leftY + flappy.image.height - 10)
  ];

  polygon.graphics.clear().beginStroke("black");
  polygon.graphics.moveTo(points[0].x, points[0].y)
                  .lineTo(points[2].x, points[2].y)
                  .lineTo(points[3].x, points[3].y)
                  .lineTo(points[1].x, points[1].y)
                  .lineTo(points[0].x, points[0].y);

  for(var i=0;i<points.length; i++){
    var objects = stage.getObjectsUnderPoint(points[i].x, points[i].y);
    if(objects.filter(o => o.name == "pipe").length > 0){
      gameOver();
      return;
    }
  }

}


const gameOver = () => {
  createjs.Tween.removeAllTweens(); //stop all tweens... 
  //createjs.Ticker.removeEventListener("tick", checkCollision);   //automatically stop onEnterFrameEventss. the stage.update(). 
  console.log('game over... ');
  resetbtn.visible = true;
  started = false;
}



const doResetAction = () => {
  //add reset btn... 
  resetbtn = new createjs.Bitmap(loader.getResult('reset'));
  resetbtn.x = 20;
  resetbtn.visible = false;
  resetbtn.y = stage.canvas.height - (resetbtn.image.width + 20);
  stage.addChild(resetbtn);

  resetbtn.addEventListener('click', function(){
    window.location.reload();
  })

}





const setWProp = (obj, type) => document.getElementById('pingObj').contentWindow.setIframeVal(type, obj.value);