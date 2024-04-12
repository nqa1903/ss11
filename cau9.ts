class Shape {
    calculateArea(): number;
    calculateArea(width: number, height: number): number;
    calculateArea(radius: number): number;

    calculateArea(arg1?: number, arg2?: number): number {
        if (arg1 !== undefined && arg2 !== undefined) {
            return arg1 * arg2;
        } else if (arg1 !== undefined) {
            return Math.PI * arg1 * arg1;
        } else {
            return 0;
        }
    }
}

class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }
}

class Circle extends Shape {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }
}

const rectangle = new Rectangle(5, 10);
const circle = new Circle(7);

console.log("Area of rectangle:", rectangle.calculateArea());

console.log("Area of circle:", circle.calculateArea());
