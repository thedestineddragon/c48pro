var bgimage,tigerGroup,monkeygroup,fruitGroup,monkeyImage,tigerImage,ground,player,playerImg;
var PLAY;
var END;
var gameState = PLAY;
var score = 0;


function preload() {
bgimage = loadImage("bg.jpg");
tigerImage = loadImage("1.jpg")
monkeyImage = loadImage("monkey.png");
playerImg = loadImage("player.png");
}

function setup() {
  createCanvas(400,400);
  ground = createSprite(200,385,800,10)
  ground.x = ground.width /2;
  ground.visible = false;
  player = createSprite(50,350,10,10);
  player.addImage(playerImg);
  
  
  

}

function draw() {
  background(bgimage);  
  bgimage.resize(100,100);
  playerImg.resize(55,55)
  monkeyImage.resize(40,40);
  
  fill("red");
  text("Score : " + score,50,15);

  if(gameState === PLAY){
    ground.velocityX = -(6 + 3*score/100);
  score = score + 1
  player.collide(ground);


  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  if(keyDown("space")){
    createFruit(player.x)
    }

    if(isTouching(monkeygroup,fruitGroup)) {
      monkeygroup.destroyEach();
      fruit.destroy();
    }
  }

createMonkey();
    createFruit();
    createtiger();
  }

  drawSprites();

function createtiger(){
  if (World.frameCount % 200 === 0 ){
var tiger = createSprite(400,350,10,10);
tiger.addImage("tiger",tigerImage);
tiger.velocityX = -2
  }
}
function createMonkey(){
  if (World.frameCount % 60 === 0 ){
var monkey = createSprite(400,350,10,10);
monkey.addImage("mon",monkeyImage);
monkey.velocityX = -2
monkeygroup.add(monkey);
  }
}
function createFruit(x) {
  var fruit= createSprite(75, 300, 5, 10);
  fruit.y = 360;
  fruit.x = x;                                           
  fruit.shapeColor = "red";
  fruit.velocityX = 1;
  fruitGroup.add(fruit);
 
  }
  
