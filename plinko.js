class Plinko {
    constructor (x,y){
    
    var options = {
    
    isStatic: true
    
    }
    this.body = Bodies.circle(x,y,15,options)
    
    this.colour = rgb(random(0,250),random(0,255),random(0,300));
    this.x = x;
    this.y = y;

    World.add(world,this.body)
    
    }
    display() {
    var pos = this.body.position;
    
    fill(this.colour);
    ellipse(pos.x,pos.y,15);
    }}