import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { OrderController } from './controllers/order.controller';
import { UserController } from './controllers/user.controller';
import { CustomerController } from './controllers/customer.controller';
import { BrandController } from './controllers/brand.controller';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, CategoriesController, OrderController, UserController, CustomerController, BrandController],
  providers: [AppService],
})
export class AppModule { }
