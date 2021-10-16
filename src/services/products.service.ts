import { Injectable } from '@nestjs/common';

import { Product } from './../entities/product.entity';
@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'bla bla bla',
      price: 122,
      image: '',
      stock: 12,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((item) => item.id === id);
  }

  create(payload: any) {
    this.counterId = this.counterId + 1;
    const product = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(product);
    return product;
  }

  update(id: number, payload: any) {
    const product = this.findOne(id);
    if (product) {
      const key = this.products.findIndex((item) => item.id === id);
      this.products[key] = {
        ...product,
        ...payload,
      };
      return this.products[key];
    } else {
      return null;
    }
  }

  delete(id: number) {
    const key = this.products.findIndex((item) => item.id === id);
    return this.products.splice(key, 1);
  }
}
