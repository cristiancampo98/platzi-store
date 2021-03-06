import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from './../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';
@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'bla bla bla',
      price: 122,
      stock: 12,
      image: '',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  create(payload: CreateProductDto) {
    this.counterId = this.counterId + 1;
    const product = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(product);
    return product;
  }

  update(id: number, payload: UpdateProductDto) {
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
    if (key === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.products.splice(key, 1);
    return true;
  }
}
