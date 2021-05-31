class Obstacle {
    constructor(x,y){
   var  option={
            isStatic:true,
        }
        this.body=Bodies.rectangle(x,y,100,20,option)
        this.width=100
        this.height=20

        World.add(world,this.body)
    }
    display(){
        push()
        fill("white")
        rect(this.body.position.x,this.body.position.y,100,20)
        pop()
    }
}