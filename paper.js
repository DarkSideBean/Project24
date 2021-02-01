class Paper 
{
  constructor(x,y,r)
  {
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }

    this.x=x;
    this.y=y;
    this.r=r;

    this.image=loadImage("paper.png")
    this.image.scale=0.5;

    this.body=Bodies.circle(this.x,this.y,this.r/2,options);
    World.add(world,this.body);
  }
  display()
  {
     var paperos=this.body.position;

     push()
     translate(paperos.x,paperos.y);
     rectMode(CENTER)
     imageMode(CENTER); 
     image(this.image, 0,0,this.r, this.r);
     pop()

  }
}