class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image=loadImage("block.png")
        this.Visibility=255
      }
      display(){
        console.log(this.body.speed)
        var pos= this.body.position;
        if(this.body.speed>5){
          World.remove(world,this.body)
          push()
          this.Visibility=this.Visibility-10
          tint(255,this.Visibility)
          image(this.image,pos.x,pos.y,40,40)
     

          pop()
        }
        else{
  

          push();
          imageMode(CENTER);
          image(this.image,pos.x,pos.y,40,40)
          
          pop();
        }
 

      }
}
