class Division {
constructor (x,y,width,height){

var options = {

isStatic: true

}
this.body = Bodies.rectangle(x,y,width,height,options)
this.colour = rgb(random(0,250),random(0,255),random(0,300));
this.x = x;
this.y = y;
this.width = width;
this.height = height;
World.add(world,this.body)

}
display() {
var pos = this.body.position;
rectMode(CENTER)
fill(this.colour);
rect(pos.x,pos.y,this.width,this.height);
}}