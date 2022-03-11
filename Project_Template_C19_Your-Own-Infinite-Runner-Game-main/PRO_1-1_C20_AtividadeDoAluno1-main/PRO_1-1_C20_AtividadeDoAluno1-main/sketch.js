const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;


function setup() {
  
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution : 0.95,
    frictionAir : 0.01
  }

  var ground_options = {
    isStatic : true
  }

  var ops = {
  isStatic : true
  }

  var rock_options = {
    restitution : 0.85
}

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  
  rock = Bodies.circle(300,20,10,rock_options);
  World.add(world,rock);

  wall = Bodies.rectangle(300,150,70,10,ground_options);
  World.add(world,wall);

  wall2 = Bodies.rectangle(100,200,100,20,ops); 
  World.add(world,wall2);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background (51);
 Engine.update(engine);

 ellipse(ball.position.x,ball.position.y,20);
 rect(ground.position.x,ground.position.y,400,20);
 ellipse(rock.position.x,rock.position.y,20); 
 rect(wall.position.x,wall.position.y,70,20);

 Matter.Body.rotate(wall2,angle);
push();
translate(wall2.position.x,wall2.position.y);
rotate(angle);
rect(0,0,100,20);
pop();
angle +=0.1
}

