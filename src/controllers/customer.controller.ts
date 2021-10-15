import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('customer')
export class CustomerController {
  @Get(':id')
  getCustomer(@Param('id') id: number) {
    return {
      id,
    };
  }

  @Get()
  getCustomers() {
    return {
      message: 'All Customers',
    };
  }

  @Post()
  storeCustomer(@Body() payload: any) {
    return {
      message: 'Store Customer',
      payload,
    };
  }

  @Put(':id')
  updateCustomer(@Param('id') id: number, @Body() payload: any) {
    return {
      message: 'Update Customer',
      id,
      payload,
    };
  }

  @Delete(':id')
  deleteCustomer(@Param('id') id: number) {
    return {
      message: 'Delete Customer',
      id,
    };
  }
}
