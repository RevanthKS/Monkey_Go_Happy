
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground;
var survivalTime=0;

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(630,500);
  
  monkey=createSprite(60,350,10,10);
  monkey.addAnimation("langoor",monkey_running);
  monkey.scale=0.2;
  
  ground=createSprite(315,412,630,10);
  ground.velocityX=-5;
  
  obstacleGroup=new Group();
  foodGroup=new Group();
}


function draw() {
  background("white");
  
  if (ground.x<630){
    ground.x=315;
  }
  
  if(keyDown("space") && monkey.y >= 340) {
      monkey.velocityY = -20;
    }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  if (frameCount%90===0){
    obstacle=createSprite(630,370,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.2;
    obstacle.velocityX=-8;
    obstacleGroup.add(obstacle);
    
    banana=createSprite(630,100,10,10);
    banana.addImage(bananaImage);
    banana.scale=0.2;
    banana.velocityX=-8;
    foodGroup.add(banana);
  }
  
  if (monkey.isTouching(obstacleGroup)){
    monkey.velocityY=0;
    obstacleGroup.setVelocityXEach(0);
    foodGroup.setVelocityXEach(0);
    fill("red");
    textSize(20);
    text("Game Over",280,250);
  }
  
  fill("blue");
  textSize(22);
  text("Survival Time:"+survivalTime,460,50);
  
  if (monkey.isTouching(foodGroup)){
    banana.visible=false;
    foodGroup.destroyEach();
    survivalTime=survivalTime+1;
  }
  
 // monkey.debug=true;
  
  drawSprites();
  
} 
 





