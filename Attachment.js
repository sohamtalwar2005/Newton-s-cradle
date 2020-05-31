class Attachment {
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:20
        }
        this.pointB = pointB;
        this.Attachment = Constraint.create(options);
        World.add(world,this.Attachment);
        }
        display(){
            push();
            strokeWeight(8);
            stroke("blue")
            var pointA = this.Attachment.bodyA.position;
            var pointB = this.pointB;
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop();
        }
}