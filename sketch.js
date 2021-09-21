const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var drops=[];
var maxDrops=200;
var lightlingimg, walkingimg;

function preload(){
    lightlingimg = loadImage("1.png");
    walkingimg = loadImage("walking_1.png");
}

function setup(){
   createCanvas(400,650);
   engine = Engine.create();
   world = engine.world;
     
    man = createSprite(200,325);
    man.addImage(walkingimg);
    man.scale=0.5;

   if(frameCount%150===0){
       for(var i=0; i<maxDrops; i++){
           drops.push(new Drops(random(0,400), random(0,400)));
        }
   }
}

function draw(){
    Engine.update(engine);
    background("black");
        for(var i=0;i<maxDrops; i++){
            drops[i].display();
            drops[i].loop1();
        }
    drawSprites();
}