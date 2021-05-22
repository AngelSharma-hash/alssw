const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var divider1;
var divider2;
var divider3;
var divider4;
var divider5;
var pinko1;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;



function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(480,800);

  ground = new Ground(220,600,400,10); 
  
 
  for (var k=20;k<=width;k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight,10,divisionHeight));
  }
  for(var k=40;k<=width;k=k+50){
    plinkos.push(new Plinko(k,175));
  }

  

}

function draw() {
  
  background(0,0,0);  

  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }
  for(var k=0;k<=plinkos.length;k=k++){
    plinkos[k].display();
  }

 
 
  
  ground.display();

  Engine.update(engine);

  drawSprites();
  //console.log(plinkos);
}