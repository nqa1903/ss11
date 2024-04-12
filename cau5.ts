class Vehicle {
    protected _name: string;
    private _speed: number;

    constructor(name: string, speed: number) {
        this._name = name;
        this._speed = speed;
    }

    protected accelerate(amount: number): void {
        this._speed += amount;
    }
}

class Car extends Vehicle {
    constructor(name: string, speed: number) {
        super(name, speed);
    }

    speedUp(amount: number): void {
        // Truy cập thuộc tính protected từ lớp cha
        this.accelerate(amount);
    }
}

class Driver {
    constructor(private vehicle: Vehicle) {}

    increaseSpeed(amount: number): void {
        // Không thể truy cập thuộc tính private từ bên ngoài lớp định nghĩa
        // this.vehicle._speed += amount; // Error: '_speed' is private
        // Không thể truy cập phương thức protected từ bên ngoài lớp kế thừa
        // this.vehicle.accelerate(amount); // Error: 'accelerate' is protected

        // Nhưng vẫn có thể tăng tốc độ thông qua phương thức công khai của lớp
        this.vehicle.speedUp(amount);
    }
}

// Tạo một chiếc xe và một tài xế
const car = new Car("MyCar", 50);
const driver = new Driver(car);

// Tài xế có thể tăng tốc độ của xe thông qua phương thức công khai
driver.increaseSpeed(20);

// Không thể truy cập trực tiếp thuộc tính private từ bên ngoài
// console.log(car._speed); // Error: '_speed' is private

// Nhưng có thể truy cập trực tiếp thuộc tính protected từ lớp kế thừa
console.log(car._name); // Output: MyCar
