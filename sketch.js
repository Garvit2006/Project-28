const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy;
var ground;
var rock;
var tree;
var mango1,mango2,mango3,mango4,mango5,mango6;
var chain;

function preload()
{
	boy = loadImage("Plucking mangoes/boy.png");
	tree = loadImage("Plucking mangoes/tree.png");
	
}

function setup() {
	createCanvas(1800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rock = new Stone(320,225);
	chain = new Chain(rock.body,{x:320,y:225});
	mango1 = new Mango(900,150,8);
	mango2 = new Mango(950,120,10);
	mango3 = new Mango(1000,100,7);
	mango4 = new Mango(950,60,9);
	mango5 = new Mango(1050,60,6);
	mango6 = new Mango(1100,120,10);

	ground = Bodies.rectangle(640,385,1290,20,{isStatic:true});
	World.add(world,ground);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  	imageMode(CENTER);
  	image(boy,400,300,250,300);
  	image(tree,1000,180,400,400);
	chain.display();
  	mango1.display();
  	mango2.display();
  	mango3.display();
  	mango4.display();
  	mango5.display();
  	mango6.display();
	rock.display();
  	collision(rock,mango1);
	collision(rock,mango2);
	collision(rock,mango3);
	collision(rock,mango4);
	collision(rock,mango5);
	collision(rock,mango6);
	
	strokeWeight(3);
	stroke(14);
	fill("red");
    text("Press Space To Hit Again", 285, 22);
  
	drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    chain.fly();
}
function keyPressed(){
	if(keyCode == 32){
		Matter.Body.setPosition(rock.body,{x:235,y:420});
		chain.attach(rock.body);
	}
}
function collision(a,b){
	var d = dist(a.body.position.x,a.body.position.y,b.body.position.x,b.body.position.y)
	if(d <= 50){
		Body.setStatic(b.body,false);
	}
}


