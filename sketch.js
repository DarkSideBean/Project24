
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800,700);
	background(0,0,0)
 
	dustbin1=createSprite(620,495,70,10);
	dustbin2=createSprite(580,485,10,30);
	dustbin3=createSprite(660,485,10,30)
	
	
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(200,510,1200,20);


	paper = new Paper(15,490,20);

	//Create the Bodies Here.
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
 
  paper.display();
 
 ground.display();
}

function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
	 Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15});
	}
	//Apply force
}

