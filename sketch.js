const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world
var box1
var box2
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world
box1=new box(100,250,40,30);
box2=new box(100,150,40,80);

}

function draw() {
  background("red");  
Engine.update(engine);
box1.display();
box2.display();
}