const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var hexagon,image,chain,ground1,ground2;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;

var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;

var box21,box22,box23,box24,box25;

function preload(){

}

function setup() {
  createCanvas(1600,800);

  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(850,500,300,20);
  ground2 = new Ground(1300,300,250,20);
    
  hexagon = new Hexagon(200,600,150,70);

  chain = new Chain(hexagon.body,{x:200,y:400});

  box1 = new Box(810,480,20,20);

}

function draw() {
  background(220);  

  hexagon.display();

  ground1.display();
  ground2.display();

  chain.display();

  box1.display();


  drawSprites();
}

function mouseDragged(){
      Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  chain.fly();
}