class Employee{
    public name : string;
    protected company : string;
    private phone : string;
    constructor(name : string, company : string, phone : string){
        this.name = name
        this.company = company
        this.phone = phone
    }
    printInfo():void{
        return console.log(`Employee : ${this.name} work in ${this.company} has phone number is ${this.phone}` );
    }
    get phone_number():string{
        return this.phone;
    }
}

class Manager extends Employee{
    teamSize : number;
    constructor(name:string , company:string , phone:string , teamSize:number){
        super(name , company , phone)
        this.name = name
        this.company = company
        this.teamSize = teamSize
        this.phone_number
    }
}