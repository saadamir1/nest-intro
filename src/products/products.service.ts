import { Injectable } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  insertProduct(title: string, desc: string, price: number) {
    const id = new Date().toString();
    const newProduct = new Product(id, title, desc, price);
    this.products.push(newProduct);
    return id;
  }

  getAllProducts() {
    return [...this.products];
  }
  getSingleProduct(prodId: string) {
    return this.products.find((prod) => prod.id === prodId);
  }
}
