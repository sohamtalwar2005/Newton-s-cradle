const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, platform, attachment;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(500,500);
    engine = Engine.create();
    world = engine.world;

    ball = new Ball(250,400,45,45);    
    ball2 = new Ball(200,400,45,45);
    ball3 = new Ball(300,400,45,45);
    platform = new Platform();
    attachment = new Attachment(ball.body,{x:250,y:100});
    attachment2 =new Attachment(ball2.body,{x:150,y:100});
    attachment3 =new Attachment(ball3.body,{x:350,y:100});    
}

function draw(){
    background(0)
    Engine.update(engine);
    
    ball.display();
    ball2.display();
    ball3.display();
    platform.display();
    attachment.display();
    attachment2.display();
    attachment3.display();
    
    
    

    


    
}