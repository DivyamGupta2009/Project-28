const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var dustbinObj, paperObj, groundObj, launcherObj;
var world;
var launchingForce=100;
var lastMouseX=null;
var lastMouseY=null;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObj = new Paper(200,450,70);
	groundObj = new Ground(width/2,670,width,20);
	dustbinObj = new Dustbin(1200,650);
	launcherObj = new Launcher(paperObj.body,{x:300,y:300})
	

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
  background(230);
 
  Engine.update(engine)
  
  paperObj.display();
  groundObj.display();
  dustbinObj.display();
  launcherObj.display();

function mouseDragged(){
	Matter.Body.setPosition(paperObj.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
	launcherObj.fly(); 
   }
}






