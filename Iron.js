class Iron{

    constructor(x,y){
     var options={
         
        restitution : 0.8,
        friction : 3,
        density : 30
     }
        this.body =  Bodies.rectangle(x,y,130,130,options);
        this.w = 130;
        this.h = 130;
        World.add(world,this.body);
    }
    
    display(){
      var position = this.body.position;
      var angle = this.body.angle;
      push(); //to apply new settings
      translate(position.x,position.y);
      rotate(angle);
      rectMode(CENTER);
      fill("black");
      rect(0,0,this.w,this.h);
      pop(); //bring back box with older settings
    }
    
    }