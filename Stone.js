class Stone{

    constructor(x,y){
     var options={
         
        restitution : 0.8,
        friction : 0.9,
        density : 12
     }
        this.body =  Bodies.rectangle(x,y,100,60,options);
        this.w = 100;
        this.h = 60;
        World.add(world,this.body);
    }
    
    display(){
      var position = this.body.position;
      var angle = this.body.angle;
      push(); //to apply new settings
      translate(position.x,position.y);
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      rect(0,0,this.w,this.h);
      pop(); //bring back box with older settings
    }
    
    }