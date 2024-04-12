class vehicle{
    protected name : string
    protected speed : number
    protected id : number
    constructor(name : string, speed : number, id : number){
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(a:number):number{
        return this.speed -= a;
    }
    speedUp(a:number):number{
        return this.speed += a;
    }
    showSpeed():number{
        return this.speed;
    }
}

class bicycle extends vehicle{
    private gear : number
    constructor(name : string , speed : number , id : number , gear : number){
        super(name, speed, id)
        this.name = name;
        this.speed = speed;
        this.id = id;
        this.gear = gear;
    }
    showGear():number{
        return this.gear;
    }
}  

const bicycle1 = new bicycle("toyato" , 15 , 1 ,20);
console.log(bicycle1.speedUp(5));
console.log(bicycle1.slowDown(5));
console.log(bicycle1.showSpeed());
console.log(bicycle1.showGear());



