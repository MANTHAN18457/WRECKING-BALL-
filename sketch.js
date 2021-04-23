
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;


var world;


function setup() {
	createCanvas(2000, 800);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

ground = new Ground(1000,750,2000,50) 

b1 = new Box(900,100,80,80)
b2 = new Box(900,100,80,80)
b3 = new Box(900,100,80,80)
b4 = new Box(900,100,80,80)
b5 = new Box(900,100,80,80)


b6 = new Box(800,100,80,80)
b7 = new Box(800,100,80,80)
b8 = new Box(800,100,80,80)
b9 = new Box(800,100,80,80)
b10 = new Box(800,100,80,80)
b11 = new Box(800,100,80,80)
b19 = new Box(800,100,80,80)


b12 = new Box(700,100,80,80)
b13 = new Box(700,100,80,80)
b14 = new Box(700,100,80,80)
b15 = new Box(700,100,80,80)
b16 = new Box(700,100,80,80)
b17 = new Box(700,100,80,80)
b18 = new Box(700,100,80,80)

ball1 = new Ball(340,300,100)

rope1=new Rope(ball1.body,{x:340,y:50})




	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  textSize(48)
  fill("skyblue")
  text("WRECKING BALL",700,100)
  

  ground.display()
  b1.display()
  b2.display()
  b3.display()
  b4.display()
  b5.display()

  b6.display()
  b7.display()
  b8.display()
  b9.display()
  b10.display()
  b11.display()

  rope1.display()

  
  b12.display()
  b13.display()
  b14.display()
  b15.display()
  b16.display()
  b17.display()
  b18.display()
  b19.display()

  ball1.display()

  

}
function mouseDragged(){
	Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}


