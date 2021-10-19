import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customers.dto';
import { Customer } from '../entities/customer.entity';

@Injectable()
export class CustomersService {
  private counter = 1;
  private categories: Customer[] = [
    {
      id: 1,
      name: 'Cristian',
      lastName: 'campo',
      phone: '4008976',
      createdAt: '2021-10-17',
    },
  ];

  findOne(id: number): Customer {
    const customer = this.categories.find((item) => item.id === id);
    if (!customer) {
      throw new NotFoundException(`Customer with #${id} not found`);
    }
    return customer;
  }

  findAll(): Customer[] {
    return this.categories;
  }

  create(payload: CreateCustomerDto): Customer {
    this.counter++;
    const customer = {
      id: this.counter,
      createdAt: new Date(payload.createdAt),
      ...payload,
    };
    this.categories.push(customer);
    return customer;
  }

  update(id: number, payload: UpdateCustomerDto): Customer {
    const customer = this.findOne(id);
    if (!customer) {
      throw new NotFoundException(`Customer with #${id} not found`);
    }
    const index = this.categories.findIndex((item) => item.id === id);
    this.categories[index] = {
      ...customer,
      ...payload,
    };
    return this.categories[index];
  }

  delete(id: number) {
    const key = this.categories.findIndex((item) => item.id === id);
    if (key === -1) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    this.categories.splice(key, 1);
    return true;
  }
}
