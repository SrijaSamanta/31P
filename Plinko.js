class Plinko{
    constructor(x,y,r){

        var opp = {
            isStatic : true
        }

        this.r = r = 10;
        this.body = Bodies.circle(x, y, r, opp);
        World.add(world, this.body);

    }
    display(){

        var pos = this.body.position;

        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.r, this.r);
        
    }
}