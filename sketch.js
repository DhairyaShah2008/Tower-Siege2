const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var Imag
var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,250,10);
  
 
  //level one of stand 1
  block1 = new stone(150,200,30,40);
  
  
  block2 = new Block(330,275,30,40);

  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  block17 = new Block(300,275,30,40); 
  //level two of stand 1
  block8 = new Block(340,255,30,40);
  block9 = new Block(370,235,30,40);
  block10 = new Block(400,235,30,40);
  block11 = new Block(430,235,30,40);
  block12 = new Block(460,235,30,40);
  block18 = new Block(310,235,30,40);
  //level three of stand 1
  block13 = new Block(330,195,30,40);
  block14 = new Block(360,195,30,40);
  block15 = new Block(390,195,30,40);
  block19 = new Block(420,195,30,40);
  block20 = new Block(450,195,30,40);
  
  //level four of stand 1
  block16 = new Block(350,155,30,40);
  block21 = new Block(380,155,30,40);
  block22 = new Block(410,155,30,40);
  block23 = new Block(440,155,30,40);

//level four of stand 1  
block24 = new Block(360,115,30,40);
block25 = new Block(390,115,30,40);
block26 = new Block(420,115,30,40);

//level five of stand 1  
block27 = new Block(380,75,30,40);
block28 = new Block(410,75,30,40);

//top of stand 1  
block29 = new Block(400,35,30,40);


  //level four of stand 2
  block30 = new Block(650,155,30,40);
  block31 = new Block(680,155,30,40);
  block32 = new Block(710,155,30,40);
 block33 = new Block(740,155,30,40);

//level four of stand 2 
block34 = new Block(660,115,30,40);
block35 = new Block(690,115,30,40);
block36 = new Block(720,115,30,40);

//level five of stand 2  
block37 = new Block(670,75,30,40);
block38 = new Block(700,75,30,40);

//top of stand 2
block39 = new Block(690,35,30,40);



  chain=new Slingshot(block1.body,{x:150,y:150})


  

}
function draw() {
  background(56,44,44); 
  
  
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  
  
  
  block1.display();

  
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block17.display();
  block24.display()
  block25.display()
  block26.display()
  block30.display()
  block31.display()
  block32.display()
  block33.display()

  
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block18.display();
  block27.display();
  block28.display();
  block34.display();
  block35.display();
  block36.display();
  
  
  
  block13.display();
  block14.display();
  block15.display();
  block19.display();
  block20.display();
  block21.display();
  block29.display();
block37.display();
  block38.display();

  
  block16.display();
  block21.display();
  block22.display();
  block23.display();
  block39.display();
  
  


  
 chain.display()

 textSize(20)
 fill("red")
 text("Press space to get Second chance",50,100)
 textSize(30)
 text("Drag the hexagonal and release the mouse to hit the building",50,50)

}

function mouseDragged(){
  Matter.Body.setPosition(block1.body,{x:mouseX,y:mouseY})
  
  }
  
  function mouseReleased(){
  chain.fly()
  };

  function keyPressed(){
    if(keyCode===32){    
      Matter.Body.setPosition(block1.body,{x:150,y:200})
    chain.attach(block1.body)}
    
      }
    