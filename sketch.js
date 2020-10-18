const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4,log5;

var bird1;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(600,790,1200,20);

    box1 = new Box(700,750,70,70);
    box2 = new Box(900,750,70,70);
    pig1 = new Pig (800,750);
    log1 = new Log (800,740,300,PI/2);

    box3 = new Box(700,730,70,70);
    box4 = new Box(900,730,70,70);
    pig2 = new Pig (800,730);
    log2 = new Log (800,690,300,PI/2);

    box5 = new Box(800,650,70,70)
    log3 = new Log(765,580,150,PI/5)
    log4 = new Log(835,580,150,-PI/5)

    bird1 = new Bird(200,400)
    
}

function draw(){
    background(0);
    Engine.update(engine);
    ground1.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();
  
    box5.display();
    log3.display();
    log4.display();

    bird1.display();
}