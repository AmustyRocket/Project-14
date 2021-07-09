var PLAY = 1;
var END = 0;
var gameState = PLAY;

var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score = 0;
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png ");
  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

  redGroup = new Group();
  blueGroup = new Group();
  greenGroup = new Group();
  pinkGroup = new Group();
  arrowGroup = new Group();
  
}

function draw() {
 background(0);
 textSize(30);
 text("Score:"+score,200,100);

 if(gameState === PLAY) 
 {
  scene.velocityX = -3;
  createArrow();
  redBalloon();
  blueBalloon();
  greenBalloon();
  pinkBalloon(); 
  var select_balloon = Math.round(random(1,1));
  
  if (World.frameCount % 60 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    }
    else if (select_balloon == 2) 
    {
      greenBalloon();
    }
    else if (select_balloon == 3) 
    {
      blueBalloon();
    }
    else 
    {
      pinkBalloon();
    }
  }      
  if (keyDown("space")) 
  {
    createArrow();
    
  }
  if(arrowGroup.isTouching(redGroup))
  {
    redGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
  }
  if(arrowGroup.isTouching(blueGroup))
  {
    blueGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
  }
  if(arrowGroup.isTouching(greenGroup))
  {
    greenGroup.destroyEach();
    greenGroup.destroyEach();
    score = score+1;
  }
  if(arrowGroup.isTouching(pinkGroup))
  {
    pinkGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
  }


 }
  // moving ground

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,1));
  

  
  drawSprites();
}


// Creating  arrows for bow
 function createArrow() {
  if(frameCount%10 === 0) 
  {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
}
 }

function redBalloon() {
  if(frameCount%80 === 0) 
  {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redGroup.add(red);

}
}

function blueBalloon() 
{
  if(frameCount%80 === 0) 
  {
  //write code for spawning blue balloons
  var blue = createSprite(0,Math.round(random(40,390)),11,11);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 5;
  blue.lifetime = 160;
  blue.scale = 0.11;
  blueGroup.add(blue);
}
}

function greenBalloon() 
{
  if(frameCount%80 === 0) 
  {
  //write code for spwaning green balloons
  var green = createSprite(0,Math.round(random(40,390)),11,11);
  green.addImage(green_balloonImage);
  green.velocityX = 5;
  green.lifetime = 170;
  green.scale = 0.11;
  greenGroup.add(green);
  }
}

function pinkBalloon() {
  if(frameCount%80 === 0) 
  {
  //write code for spwaning pink balloons
  var pink = createSprite(0,Math.round(random(40,390)),11,11);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 5;
  pink.lifetime = 180;
  pink.scale = 0.11;
  pinkGroup.add(pink);
}
}