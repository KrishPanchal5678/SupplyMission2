var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, groundIMG, backgroundIMG; 
var Ground2, GrIMG;
var base, baseIMG, Box, BoxIMG;
var zombie, zombie2, zombieIMG, zombie2IMG;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("sprites/helicopter.png")
	packageIMG=loadImage("sprites/package.png")

	zombieIMG = loadImage("sprites/Zombie.png")
	zombie2IMG = loadImage("sprites/Zombie2.png")
	
    backgroundIMG = loadImage("sprites/bg2.png")
    GrIMG = loadImage("sprites/ground.png")
	
	baseIMG = loadImage("sprites/wood2.png")

    BoxIMG = loadImage("sprites/drop.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	Ground2 = createSprite(width/2, 745, width, 20);
	Ground2.addImage(GrIMG)
	Ground2.scale= 0.5;

	zombie = createSprite(10, 600, 10, 10 );
	zombie.addImage(zombieIMG)
	zombie.scale = 0.15;

	zombie2 = createSprite(690, 600, 10, 10 );
	zombie2.addImage(zombie2IMG)
	zombie2.scale = 0.15;

	base = createSprite(width/2, 695, width, 20);
	base.addImage(baseIMG)
	base.scale= 0.75;
	
	Box = createSprite(width/2, 665, width, 20);
	Box.addImage(BoxIMG)
	Box.scale= 0.15;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.15

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	/*groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)*/


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.25, friction: 0,  isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 680, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundIMG);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



