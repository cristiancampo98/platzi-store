import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brands.dto';
import { Brand } from '../entities/brand.entity';

@Injectable()
export class BrandsService {
  private counter = 1;
  private brands: Brand[] = [
    {
      id: 1,
      name: 'Samsung',
      image: '',
      createdAt: '2021-10-17',
    },
  ];

  findOne(id: number): Brand {
    const brand = this.brands.find((item) => item.id === id);
    if (!brand) {
      throw new NotFoundException(`Brand with #${id} not found`);
    }
    return brand;
  }

  findAll(): Brand[] {
    return this.brands;
  }

  create(payload: CreateBrandDto): Brand {
    this.counter++;
    const brand = {
      id: this.counter,
      createdAt: new Date(payload.createdAt),
      ...payload,
    };
    this.brands.push(brand);
    return brand;
  }

  update(id: number, payload: UpdateBrandDto): Brand {
    const brand = this.findOne(id);
    if (!brand) {
      throw new NotFoundException(`Brand with #${id} not found`);
    }
    const index = this.brands.findIndex((item) => item.id === id);
    this.brands[index] = {
      ...brand,
      ...payload,
    };
    return this.brands[index];
  }

  delete(id: number) {
    const key = this.brands.findIndex((item) => item.id === id);
    if (key === -1) {
      throw new NotFoundException(`Brand #${id} not found`);
    }
    this.brands.splice(key, 1);
    return true;
  }
}
