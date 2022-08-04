var stage;
var ball;
var cw, chl;

var o, b;
var vx = 2.6, vy = 2.8, speed = 10;

const getv = v => v.value;
const setVX = (o) => console.log(getv(o));

function startPingPong(){
    stage = new createjs.Stage("bgcanvas");

    
  //canvas dimensions.. 
   cw = stage.canvas.width;
   ch = stage.canvas.height;

    //add Ticker - frameRate Timer.. 
    createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;   //target a certain framerate. 
    createjs.Ticker.framerate = 60;                             //now you set it to 60fps. 
    createjs.Ticker.addEventListener("tick", stage);   //automatically calls the stage.update(). 

    addDotsToStage();
    createPingPongBall(); 
    
    createjs.Ticker.addEventListener("tick", tickerActions);
}

function addDotsToStage(){
    
    for(let i=1; i <= 100; i++){    
        //add circs. 
        o = new createjs.Shape();
        o.x = Math.random() * cw;
        o.y = Math.random() * ch;
        o.alpha = Math.random() * 1 ;       
        o.regX = 2.5;
        o.regY = 2.5;
        o.graphics.beginFill(getRandomColor()).drawCircle(0, 0, 5); 
        stage.addChild(o);

        //add squares. 
        b = new createjs.Shape();
        b.regX = 5;
        b.regY = 5;
        b.alpha =  Math.random() * 1;
        b.x = Math.abs(cw - (Math.random() * cw));
        b.y = Math.abs(ch - (Math.random() * ch));

        b.graphics.beginFill(getRandomColor()).drawRect(0, 0, 10, 10); 
        stage.addChild(b);
    }
}


function createPingPongBall(){
    ball = new createjs.Shape();
    ball.graphics.beginFill(getRandomColor()).drawCircle(0, 0, 40); 
    ball.x = 20;
    ball.y = 20;
    // ball.regX = 20;
    // ball.regY = 20;

    stage.addChild(ball);

}

function tickerActions(){
    moveBall();   //automatically calls the stage.update(). 
}

function moveBall(){
    ball.x += speed * vx;
    ball.y += speed * vy;

    if(ball.y > ch) vy *= -1;
    if(ball.x > cw) vx *= -1;
    
    if(ball.y < 0) vy *= -1;
    if(ball.x < 0) vx *= -1;

    //ball.cache(0, 0, cw, ch);  //you have to cache if using stageGL.. 
}

var colors = ['#C33F00', '#CDD24F', '#C5573E'];
const getRandomColor = () =>  colors[Math.floor(Math.random() * colors.length)];   //get random colors... 