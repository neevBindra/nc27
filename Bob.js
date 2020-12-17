class Bob{
    constructor(x,y){
    var op = {
       // isStatic:false,
       restitution:0.5,
        friction:0.5,
        density:0.9
    }
       this.body = Bodies.circle(x,y,50,op)
        World.add(world,this.body);
      
    }
    display(){
        var pos = this.body.position;
     
        fill ("pink")
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y,30);

    }

}