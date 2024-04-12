class Account {
    protected accountNumber : number;
    protected balance : number;
    constructor(accountNumber : number, balance : number){
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount:number):void{
        if(amount > 0){
            this.balance += amount;
            console.log(`deposit ${amount} into ${this.accountNumber}`);
        }else{
            console.log(`deposit must be greater than 0`);
            
        }
    }
    withdraw(amount:number):void{
        if(amount > 0){
            if(amount <= this.balance){
                this.balance -= amount;
                console.log(`withdraw ${amount} from ${this.accountNumber}`);
            }else{
                console.log(`cant withdraw from ${this.accountNumber}`);
            }
        }else{
            console.log(`withdraw must be greater than 0`);
        }
    }
}

class SavingsAccount extends Account{
    private interestRate : number;
    constructor(accountNumber : number , balance : number , interestRate : number){
        super(accountNumber, balance)
        this.accountNumber = accountNumber;
        this.balance = balance
        this.interestRate = interestRate
    }
    calculateInterest():number{
        return (this.balance * this.interestRate) / 100;
    }
}

class CheckingAccount extends Account{
    private overdraftLimit : number;
    constructor(accountNumber : number , balance : number , interestRate : number, overdraftLimit : number){
        super(accountNumber, balance)
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount: number): void {
        if(amount > 0){
            if(amount <= this.overdraftLimit){
                this.balance -= amount;
                console.log(`withdraw ${amount} from ${this.accountNumber}`);
            }else{
                console.log(`cant withdraw ${amount} from ${this.accountNumber}`);
            }
        }else{
            console.log(`withdraw must be greater than 0`);
        }
    }
}

const account1 = new SavingsAccount(1,150,10);
account1.deposit(100);
account1.withdraw(10);
console.log(account1.calculateInterest());

const account2 = new CheckingAccount(2,200,20,30);
account2.withdraw(100);
