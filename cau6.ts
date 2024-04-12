class Product {
    protected _name : string;
    protected _price : number;
    constructor(_name : string, _price : number){
        this._name = _name;
        this._price = _price;
    }
    getDescription():void {
        console.log(`this ${this._name} cost ${this._price}$`);
    }
}

class Electronics extends Product {
    private _brand : string;
    constructor(_name : string , _price : number , _brand : string){
        super(_name , _price)
        this._name = _name;
        this._price = _price;
        this._brand = _brand;
    }
}

const electronic = new Electronics("fan" , 150 , "toyato");
console.log(electronic.getDescription());
