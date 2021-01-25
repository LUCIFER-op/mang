
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1150, 80,  30);
	mango3=new mango(1050, 60,  30);
	mango4=new mango(1000, 90,  30);
	mango5=new mango(900, 180,  30);
	mango6=new mango(1000, 180,  30);
	mango7=new mango(1100, 180,  30);
	mango8=new mango(1200, 180,  30);
	mango9=new mango(950, 240,  30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
    groundObject.display();
}
function keyPressed ()
{
	if(keycode === 32)
	{
	Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
	launcherObject.attach(stoneObj.body);

	}
}

function detctcollision (lstone, lmango)
{
mangBodyPosition=mango1.Body.position
stoneBodyPosition=stone1.Body.position

var distance = dist (stoneBodyPosition.x, stoneBodyPosition.y, mangBodyPosition.x, mangBodyPosition.y)
if(distance<=mango1.r+stone1.r)
{
Matter.Body .setStactic(mango1.body, false)

}
}