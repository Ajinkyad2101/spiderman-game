var bgImg,bg;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var obstacles=[];

function preload(){
bgImg=loadImage("images/fbg.jpg")
}

function setup(){
  createCanvas(windowWidth,windowHeight)

  engine = Engine.create();
  world = engine.world;

  bg=createSprite(width/2,height/2)
  bg.addImage("background",bgImg)
  bg.scale=1.5;
  bg.velocityX=-4;

 for(var i=100 ; i<=4000 ; i=i+200){
obstacles.push( new Obstacle(i,height/2))
 }

}

function draw(){
background(0)

Engine.update(engine)

if(bg.x<0){
bg.x=width/2;
}

for(var i=0; i<obstacles.length; i++){
obstacles[i].display
}



//drawSprites();
}

function spawnObstacles(){
 
}