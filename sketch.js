
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var plinkos = [];
var particles = [];




function setup(){
    createCanvas(450,500);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(225,495,440,15);
    div1 = new Division(2,250,10,510);
    div2 = new Division(52,380,10,280);
    div3 = new Division(104,380,10,280);
    div4 = new Division(156,380,10,280);
    div5 = new Division(208,380,10,280);
    div6 = new Division(260,380,10,280);
    div8 = new Division(310,380,10,280);
    div9 = new Division(360,380,10,280);
    div10 = new Division(400,380,10,280);
    div7 = new Division(448,250,10,510);
   


}

function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);

    
    for (var j = 40; j <=width; j=j+60) {
 
        plinkos.push(new Plinko(j,80));

    }
    for (var j = 10; j <=width; j=j+70) {
 
        plinkos.push(new Plinko(j,120));

    }
    for (var j = 20; j <=width; j=j+60) {
 
        plinkos.push(new Plinko(j,170));

    }
    



    div1.display();

    div2.display();

    div3.display();

    div4.display();

    div5.display();

    div6.display();

    div7.display();

    div8.display();

    div9.display();

    div10.display();

    ground.display();
    

    if(frameCount%60===1){
        particles.push(new Particle(random(width/2-90, width/2+90), 10,10));
       
      }
      for(var j=0;j<plinkos.length;j=j+1){
        plinkos[j].display()
      }
      
    
    
    
      for (var j = 0; j < particles.length; j++ ){
       
        particles[j].display();
      
    }  
      




}