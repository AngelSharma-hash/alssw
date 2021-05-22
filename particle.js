class Particle{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.r=r;
       
        this.body = Bodies.circle(x,y,width,options);
        this.color = color(random(0,255),random(0,255));
        World.add(world, this.body);
        

        this.width=width;
        this.height = height;
    }
    display(){
        var pos= this.body.position;
        var angle = this.body.angle;
        fill("white");
        
       push();
       translate(pos.x,pos.y);
       rotate(angle);
       noStroke();
       fill(this.color);
       eclipseMode(Radius);
       eclipse(0,0,this.r,this.r);
       pop();
    }
}