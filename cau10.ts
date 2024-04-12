class Shape {
    calculateArea(): number;
    calculateArea(width: number, height: number): number;
    calculateArea(radius: number): number;

    calculateArea(arg1?: number, arg2?: number): number {
        if (arg1 !== undefined && arg2 !== undefined) {
            // Tính diện tích hình chữ nhật
            return arg1 * arg2;
        } else if (arg1 !== undefined) {
            return Math.PI * arg1 * arg1;
        } else {
            return 0;
        }
    }

    calculatePerimeter(): number;
    calculatePerimeter(width: number, height: number): number;
    calculatePerimeter(radius: number): number;

    calculatePerimeter(arg1?: number, arg2?: number): number {
        if (arg1 !== undefined && arg2 !== undefined) {
            return 2 * (arg1 + arg2);
        } else if (arg1 !== undefined) {
            return 2 * Math.PI * arg1;
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

console.log("Perimeter of rectangle:", rectangle.calculatePerimeter());

console.log("Perimeter of circle:", circle.calculatePerimeter());
