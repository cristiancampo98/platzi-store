import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/dtos/users.dtos';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UsersService {
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
}
