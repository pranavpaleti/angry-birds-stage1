class Box{
  constructor(x,y,width,height){
      this.body=Bodies.rectangle(x,y,width,height);
      this.width=width;
      this.height=height
      World.add(myWorld,this.body)
  }  
  display(){ 
  var pos=this.body.position
  var angle=this.body.angle
  push()
  translate(pos.x,pos.y)
  rotate(angle)
  fill("yellow")
  strokeWeight(5)
  rectMode(CENTER)
  rect(0,0,this.width,this.height);
  pop()
}
}