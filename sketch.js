const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine, world;
var backgroundImg,platform;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    log5=new Log(150,200,300,100,PI)
     log6=new Log(150,180,300,100,PI)
     log7=new Log(1050,180,300,100,PI)
     log8=new Log(1050,200,300,100,PI)
     log1=new Log(600,200,600,100,PI)
     log2=new Log(600,180,600,100,PI)
     log3=new Log(600,160,50,200,PI/7)
    log4=new Log(640,140,50,200,-PI/6)
    box1=new Box(150,50,200,200)
    box2=new Box(1050,50,200,200)
    ground = new Ground(600,height,1200,20);
   
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    log6.display();
    log7.display();
    log8.display();
    box1.display();
    box2.display();
    ground.display();
   
}
