import { Module } from '@nestjs/common';
import { ProductsModule } from 'src/products/products.module';
import { CustomerController } from './controllers/customer.controller';
import { UserController } from './controllers/user.controller';
import { CustomersService } from './services/customers.service';
import { UsersService } from './services/users.service';

@Module({
  imports: [ProductsModule],
  controllers: [CustomerController, UserController],
  providers: [CustomersService, UsersService],
})
export class UsersModule { }
