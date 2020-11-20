class Box{
    constructor(x, y, width, height) {
        var options = {
          'isStaic':false,
          'restitution':0.5,
          'friction':1.0,
          'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visiblity = 255;
        this.image = loadImage("wood1.png");
        World.add(world, this.body);
      }
       
        display(){
          //console.log(this.body.speed);
          if(this.body.speed < 5){ 
            var angle = this.body.angle;
            var pos = this.body.position;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image,0,0, 50, 50);
            fill("blue");
            pop();
          }
          else{
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
            imageMode(CENTER);
            image(this.image,this.body.position.x,this.body.position.y, 50, 50);
            pop();
          }
        }
        score(){
          //console.log(this.Visiblity);
          if(this.Visiblity < 0 && this.Visiblity > -105){
          
            score++
          }
         }
      }
      
