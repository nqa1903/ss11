class Person{
    name : string;
    constructor(name : string){
        this.name = name;
    }
    displayInfo():void{
        console.log(this.name);        
    }
}

class Student extends Person{
    id : number;
    constructor(name : string , id : number){
        super(name)
        this.id = id;
        this.name = name;
    }
}

let std1 = new Student("anh" , 1);
std1.displayInfo();