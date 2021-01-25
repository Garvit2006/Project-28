class Chain{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stifness:0.02,
            length:10
        
        }
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    attach(){
        this.sling.bodyA = rock.body;
    }
    display(){
        if(this.sling.bodyA!=null){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}