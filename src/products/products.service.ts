import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  insertProduct(title: string, desc: string, price: number) {
    const id = Math.random().toString();
    const newProduct = new Product(id, title, desc, price);
    this.products.push(newProduct);
    return id;
  }
  getAllProducts() {
    return [...this.products];
  }
  getSingleProduct(prodId: string) {
    const product = this.products.find((prod) => prod.id === prodId);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return { ...product };
  }
  updateProduct(prodId: string, title: string, desc: string, price: number) {
    const product = this.products.find((prod) => prod.id === prodId);
    if (!product) {
      throw new NotFoundException('Product not found');
    }

    if (title) product.title = title;
    if (desc) product.desc = desc;
    if (price) product.price = price;
  }

  deleteProduct(prodId: string) {
    const prodIndex = this.products.findIndex((prod) => prod.id === prodId);
    if (prodIndex === -1) {
      throw new NotFoundException('Product not found');
    }
    this.products.splice(prodIndex, 1);
  }
}
