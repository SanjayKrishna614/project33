class Snow {
    constructor(x,y,w,h){
        var Options = {
            friction:1,
            density:100,
            isStatic:false
        }
        this.body = Bodies.rectangle(x,y,w,h,Options)
        this.w = w
        this.h = h
        this.image = loadImage ("snow4.webp")
        World.add (world,this.body)

    }
    
    display(){
        push()
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,60,60)
        pop()

    }



}