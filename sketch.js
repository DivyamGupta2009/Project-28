const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var dustbin, paper,ground, launcher;
var world;
var launchingForce=100;
var lastMouseX=null;
var lastMouseY=null;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paper = new Paper(200,450,70);
	ground = new Ground(width/2,670,width,20);
	dustbin = new dustbin(1200,650);
	launcherObject=new launcher(paperObject.body,{x:300,y:300})
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
}


function draw() {
  //rectMode(CENTER);
  background(230);
 
  Engine.update(engine)
  
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
  launcherObject.display();

function mouseDragged(){
	Matter.Body.setPosition(paperObject.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
	launcherObject.fly(); 
   }
}






