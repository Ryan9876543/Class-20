
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var rock;
var wall;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var rock_options = {
    restitution: 0.75,
    frictionAir: 0.05
  }
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  rock = Bodies.circle(300,10,25,rock_options)
  World.add(world,rock)

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  wall = Bodies.rectangle(300,200,200,10,ground_options);
  World.add(world,wall);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(rock.position.x,rock.position.y,20);
  rect(wall.position.x,wall.position.y,200,10)
 
}

