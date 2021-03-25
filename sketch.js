
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var bob1,bob2,bob3, bob4, bob5, world, engine, roof, rope1, rope2, bobDiameter, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	
  createCanvas(1200, 900);
    

	engine = Engine.create();
	world = engine.world;
  bobDiameter=40;
  //bobx=width/2;
  //boby=height/4;
	bob1=new Bob(200, 400, bobDiameter); 
	bob2=new Bob(250, 400, bobDiameter);
	bob3=new Bob(300, 400, bobDiameter);
	bob4=new Bob(350, 400, bobDiameter);
	bob5=new Bob(400, 400, bobDiameter);
	roof=new Roof(300, 100, 300, 20);
  rope1=new Rope(bob1.body, roof.body, -bobDiameter*2, 0);
  rope2=new Rope(bob2.body, roof.body, -bobDiameter*1, 0);
  rope3=new Rope(bob3.body, roof.body, -bobDiameter*0, 0);
  rope4=new Rope(bob4.body, roof.body, bobDiameter*1, 0);
  rope5=new Rope(bob5.body, roof.body, bobDiameter*2, 0);
  

	//Create the Bodies Here.


	
  
}


function draw() {


  rectMode(CENTER);
  background("grey");
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
  
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(bob1.body, {x: mouseX , y: mouseY});
 
  
  



}