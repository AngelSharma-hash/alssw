class Plinko{
    constructor(x,y,width){
        var options={
            isStatic:true,
          
        }
       
        this.body = Bodies.rectangle(x,y,width,options);
        World.add(world, this.body);

        this.width=width;
        this.height = height;
    }
    display(){
        var pen = this.body.position;
        fill("white");
        console.log(plinkos);
        
        circle(pen.x,pen.y,10);
    }
}