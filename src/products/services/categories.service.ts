import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/categories.dto';
import { Category } from '../entities/category.entity';

@Injectable()
export class CategoriesService {
  private counter = 1;
  private categories: Category[] = [
    {
      id: 1,
      name: 'Tecnología',
      createdAt: '2021-10-17',
    },
  ];

  findOne(id: number): Category {
    const category = this.categories.find((item) => item.id === id);
    if (!category) {
      throw new NotFoundException(`Category with #${id} not found`);
    }
    return category;
  }

  findAll(): Category[] {
    return this.categories;
  }

  create(payload: CreateCategoryDto): Category {
    this.counter++;
    const category = {
      id: this.counter,
      createdAt: new Date(payload.createdAt),
      ...payload,
    };
    this.categories.push(category);
    return category;
  }

  update(id: number, payload: UpdateCategoryDto): Category {
    const category = this.findOne(id);
    if (!category) {
      throw new NotFoundException(`Category with #${id} not found`);
    }
    const index = this.categories.findIndex((item) => item.id === id);
    this.categories[index] = {
      ...category,
      ...payload,
    };
    return this.categories[index];
  }

  delete(id: number) {
    const key = this.categories.findIndex((item) => item.id === id);
    if (key === -1) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    this.categories.splice(key, 1);
    return true;
  }
}
