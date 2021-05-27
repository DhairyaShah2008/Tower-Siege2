class Slingshot{
    constructor(A,pointB) {
        var options = {
   bodyA:A,
pointB:pointB,
//property:arguement
   stiffness:0.1,
   length:10
        }
        this.pointB=pointB
this.chain=Constraint.create(options)
World.add(world,this.chain)
      }
      fly(){
          this.chain.bodyA=null
    }

    attach(body){
        this.chain.bodyA=body
        }
        
      display(){
          if(this.chain.bodyA){
            var APos=this.chain.bodyA.position
            var BPos=this.pointB
  strokeWeight(5)
  line(APos.x,APos.y,BPos.x,BPos.y)
          }
         
      }
}