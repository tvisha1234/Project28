
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, ground, stone;
var boy;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var link;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(1200,360,300,600);
	ground = new Ground(800,650, 1600,30);
	stone = new Stone(345,455,40,40);
	boy = new Boy(400,550,200,400);

	mango1 = new Mango(1200,230,50);
	mango2 = new Mango(1300,300,50);
	mango3 = new Mango(1100,250,50);
	mango4 = new Mango(1200,280,50);
	mango5 = new Mango(1160,240,50);
	mango6 = new Mango(1200,150,50);
	mango7 = new Mango(1340,240,50);
	mango8 = new Mango(1270,250,50);
	mango9 = new Mango(1160,310,50);
	mango10 = new Mango(1270,190,50);

	link = new Link(stone.body, {x:350,y:450});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);

  tree.display();
  ground.display();
  boy.display();
  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  link.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);
  detectCollision(stone, mango9);
  detectCollision(stone, mango10);

  keyPressed();
 
}

function mouseDragged(){

    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    
}

function mouseReleased(){

    link.fly();

}

function detectCollision(lstone, lmango) {
  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

  if(distance<= lmango.r + lstone.r) {

    Matter.Body.setStatic(lmango.body, false);

  }
}

function keyPressed() {
  if(keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:350, y:450})
    launcherObject.attach(stone.body);
  }
}