export class Product {
  title: string;
  price: number;
  constructor (t: string, p: number) {
    this.price = p;
    this.title = t;
  }
  
  getInformation() {
    return [this.title, `${this.price}`]
  }
}