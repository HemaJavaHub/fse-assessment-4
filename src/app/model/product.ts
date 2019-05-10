export class Product {
    category: string;
    brand: string;
    color: string;
    price: number;


    constructor(category: string, brand: string, color: string, price: number) {
        this.category = category;
        this.brand = brand;
        this.color = color;
        this.price = price;
    }
}