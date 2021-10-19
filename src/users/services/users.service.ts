import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ProductsService } from 'src/products/services/products.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dto';
import { Order } from '../entities/order.entity';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    private productsService: ProductsService,
    private configService: ConfigService,
  ) { }
  private counter = 1;
  private users: User[] = [
    {
      id: 1,
      email: 'correo@gmail.com',
      password: '12345',
      role: 'admin',
      createdAt: '2021-10-17',
    },
  ];

  findOne(id: number): User {
    const user = this.users.find((item) => item.id === id);
    if (!user) {
      throw new NotFoundException(`user with #${id} not found`);
    }
    return user;
  }

  findAll(): User[] {
    const apiKey = this.configService.get('API_KEY');
    const db = this.configService.get('DATABASE_NAME');
    console.log(apiKey, db);
    return this.users;
  }

  create(payload: CreateUserDto): User {
    this.counter++;
    const user = {
      id: this.counter,
      createdAt: new Date(payload.createdAt),
      ...payload,
    };
    this.users.push(user);
    return user;
  }

  update(id: number, payload: UpdateUserDto): User {
    const user = this.findOne(id);
    if (!user) {
      throw new NotFoundException(`user with #${id} not found`);
    }
    const index = this.users.findIndex((item) => item.id === id);
    this.users[index] = {
      ...user,
      ...payload,
    };
    return this.users[index];
  }

  delete(id: number) {
    const key = this.users.findIndex((item) => item.id === id);
    if (key === -1) {
      throw new NotFoundException(`user #${id} not found`);
    }
    this.users.splice(key, 1);
    return true;
  }

  getOrdersByUser(id: number): Order {
    const user = this.findOne(id);
    return {
      date: new Date(),
      user,
      products: this.productsService.findAll(),
    };
  }
}
