class Hexagon{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0,
            friction:1.0,
            density:1.2,
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.image = loadImage("download.png");
        this.radius = radius;
        World.add(world, this.body);

    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);;
        pop();
    }
}