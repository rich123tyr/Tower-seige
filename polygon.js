class Hexagon{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0,
            friction:1.0,
            density:1.2,
        }
        this.body = Bodies.polygon(x,y,width,height,options);
        this.image = loadImage("download.png");
        this.width = width;
        this.height = height;
        World.add(world, this.body);

    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        this.image.scale = 2.0;
        push();
        translate(this.body.position.x,this.body.position.y);
        fill("yellow");
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}