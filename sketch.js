const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, box1, box2, box3, ground, binImg, bin;

function preload() {
	binImg = loadImage("bot.png");
}

function setup() {
	createCanvas(900, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper();
	box1 = new Box(600, 300, 20, 100);
	box2 = new Box(700, 340, 200, 20);
	box3 = new Box(780, 300, 20, 100);
	ground = new Box(width / 2, 360, width, 10);
	bin = createSprite(690, 250, 70, 70);
	bin.addImage("bin", binImg);
	bin.scale = 0.5;
	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);
	ball.display();
	box1.display();
	box2.display();
	box3.display();
	ground.display();
	keyPressed();
	drawSprites();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body, ball.body.position, {
			x: 85,
			y: -85
		});
	}

}