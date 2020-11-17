class Particle {
    constructor (x,y,r){
    
    var options = {
    
    isStatic: false,
    restitution: 0.2
    
    }
    this.body = Bodies.circle(x,y,r,options)
    
    this.colour = rgb(random(0,500),random(0,500),random(0,500));
    this.x = x;
    this.y = y;
    this.r = r;
    World.add(world,this.body)
    
    }
    display() {
    var pos = this.body.position;
    
    fill(this.colour);
    ellipse(pos.x,pos.y,this.r,this.r);
    }}
