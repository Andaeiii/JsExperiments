var stage, canvas, cw, ch;
var loader;

function initProj(){
    stage = new createjs.Stage("spcanvas");
 
   //canvas dimensions.. 
    canvas = stage.canvas;

    console.log(canvas);


    loadAssets();
 
}


function loadAssets(){
    
      //load the images.... using preload.js 
      var manifest = [
        {"src":"cloud.png", "id":"cloud" },
        {"src": "sheet.json", "id": "sheet", "type": "spritesheet"}
      ];

      //initialize the loader...
      loader = new createjs.LoadQueue(true); 
      loader.addEventListener("complete", onAssetLoadComplete);
      loader.loadManifest(manifest, true, "./imgs/");
}



function onAssetLoadComplete(){
    alert('hello,... dup..')
}