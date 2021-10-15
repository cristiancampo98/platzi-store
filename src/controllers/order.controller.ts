import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('order')
export class OrderController {
  @Get(':id')
  getOrder(@Param('id') id: number) {
    return {
      id,
    };
  }

  @Get()
  getOrders() {
    return {
      message: 'All Orders',
    };
  }

  @Post()
  storeOrder(@Body() payload: any) {
    return {
      message: 'Store Order',
      payload,
    };
  }

  @Put(':id')
  updateOrder(@Param('id') id: number, @Body() payload: any) {
    return {
      message: 'Update Order',
      id,
      payload,
    };
  }

  @Delete(':id')
  deleteOrder(@Param('id') id: number) {
    return {
      message: 'Delete Order',
      id,
    };
  }
}
