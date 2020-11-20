const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Events = Matter.Events;

var engine, world;

var hexagon,image,chain,ground1,ground2;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;

var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;

var box21,box22,box23,box24,box25,box26,box27,box28,box29,box30;

var box31,box32,box33,box34,box35,box36,box37,box38,box39,box40;

var box41,box42,box43,box44,box45,box46,box47,box48,box49,box50;

var box51,box52,box53,box54,box55,box56,box57;

var backgroundImg;

gameState = "onSling";

var score = 0;

function preload(){
  
  getbackground();

}

function setup() {
  createCanvas(1600,800);

  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(860,500,320,20);
  ground2 = new Ground(1290,300,230,20);
    
  hexagon = new Hexagon(300,400,30);

  chain = new SlingShot(hexagon.body,{x:300,y:400});

  box1 = new Box(720,470,30,40);
  box2 = new Box(760,470,30,40);
  box3 = new Box(800,470,30,40);
  box4 = new Box(840,470,30,40);
  box5 = new Box(880,470,30,40);
  box6 = new Box(920,470,30,40);
  box7 = new Box(960,470,30,40);
  box8 = new Box(1000,470,30,40);
  box9 = new Box(740,430,30,40);
  box10 = new Box(780,430,30,40);
  box11 = new Box(820,430,30,40);
  box12 = new Box(860,430,30,40);
  box13 = new Box(900,430,30,40);
  box14 = new Box(940,430,30,40);
  box15 = new Box(980,430,30,40);
  box16 = new Box(760,390,30,40);
  box17 = new Box(800,390,30,40);
  box18 = new Box(840,390,30,40);
  box19 = new Box(880,390,30,40);
  box20 = new Box(920,390,30,40);
  box21 = new Box(960,390,30,40);
  box22 = new Box(780,350,30,40);
  box23 = new Box(820,350,30,40);
  box24 = new Box(860,350,30,40);
  box25 = new Box(900,350,30,40);
  box26 = new Box(940,350,30,40);
  box27 = new Box(800,310,30,40);
  box28 = new Box(840,310,30,40);
  box29 = new Box(880,310,30,40);
  box30 = new Box(920,310,30,40);
  box31 = new Box(820,270,30,40);
  box32 = new Box(860,270,30,40);
  box33 = new Box(900,270,30,40);
  box34 = new Box(840,230,30,40);
  box35 = new Box(880,230,30,40);
  box36 = new Box(860,190,30,40);

  box37 = new Box(1190,270,30,40);
  box38 = new Box(1230,270,30,40);
  box39 = new Box(1270,270,30,40);
  box40 = new Box(1310,270,30,40);
  box41 = new Box(1350,270,30,40);
  box42 = new Box(1390,270,30,40);
  box43 = new Box(1210,230,30,40);
  box44 = new Box(1250,230,30,40);
  box45 = new Box(1290,230,30,40);
  box46 = new Box(1330,230,30,40);
  box47 = new Box(1370,230,30,40);
  box48 = new Box(1230,190,30,40);
  box49 = new Box(1270,190,30,40);
  box50 = new Box(1310,190,30,40);
  box51 = new Box(1350,190,30,40);
  box52 = new Box(1250,150,30,40);
  box53 = new Box(1290,150,30,40);
  box54 = new Box(1330,150,30,40);
  box55 = new Box(1270,110,30,40);
  box56 = new Box(1310,110,30,40);
  box57 = new Box(1290,70,30,40);
  
  Engine.run(engine);

}

function draw() {
  if(backgroundImg){
    background(backgroundImg);
}
  Engine.update(engine);

  hexagon.display();

  ground1.display();
  ground2.display();

  chain.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  box37.display();
  box38.display();
  box39.display();
  box40.display();
  box41.display();
  box42.display();
  box43.display();
  box44.display();
  box45.display();
  box46.display();
  box47.display();
  box48.display();
  box49.display();
  box50.display();
  box51.display();
  box52.display();
  box53.display();
  box54.display();
  box55.display();
  box56.display();
  box57.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();
  box26.score();
  box27.score();
  box28.score();
  box29.score();
  box30.score();
  box31.score();
  box32.score();
  box33.score();
  box34.score();
  box35.score();
  box36.score();
  box37.score();
  box38.score();
  box39.score();
  box40.score();
  box41.score();
  box42.score();
  box43.score();
  box44.score();
  box45.score();
  box46.score();
  box47.score();
  box48.score();
  box49.score();
  box50.score();
  box51.score();
  box52.score();
  box53.score();
  box54.score();
  box55.score();
  box56.score();
  box57.score();

  textSize(30);
  text(score,width-300,30)
  
  drawSprites();
}

function mouseDragged(){
  Events.on(engine,"afterUpdate",function(){
      if (gameState!=="launched"){
          Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
      }
  })
  
}

function mouseReleased(){
  engine.events = {}
  chain.fly();
  gameState =  "launched";
}

function keyPressed(){
  if(keyCode === 32){
      chain.attach(hexagon.body);
  }
}

async function getbackground(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var response1 = await response.json(); 

  var datetime = response1.datetime;

  var time = datetime.slice(11,13);

  if(time >= 6 && time<=19 ){

      backgroundImg = loadImage("bg.png");
  }
  else{
       backgroundImg = loadImage("bg2.jpg");
  }

}