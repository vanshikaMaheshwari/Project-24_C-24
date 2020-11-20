
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	PAPER = new Paper(100,100,20);
	push();
	fill(220, 45, 225);
	stroke(220, 45, 225);
	GROUND = new Ground(400,550,790,10);
	pop();
	WALL_LEFT = new Ground(500,510,10,50);
	WALL_RIGHT = new Ground(600,510,10,50);
	WALL_BOTTOM = new Ground(550,540,100,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(50, 0, 92);
  PAPER.display();
  fill(232, 80, 236);
  stroke(232, 80, 236);
  GROUND.display();
  fill(80, 225, 238);
  stroke(80, 225, 238);
  WALL_LEFT.display();
  WALL_RIGHT.display();
  WALL_BOTTOM.display();

  if(keyWentUp("RIGHT_ARROW")){
	  Matter.Body.applyForce(PAPER.body,PAPER.body.position,{x:53,y:-53})
  }

  drawSprites();
 
  fill(225, 27, 126);
  stroke(225, 27, 126);
  textSize(80);
  text("CRUMPLED BALLS",40,100);
}



