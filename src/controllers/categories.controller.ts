import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':id')
  getCategory(@Param('id') id: number) {
    return {
      id,
    };
  }

  @Get()
  getCategories() {
    return {
      message: 'All Categorys',
    };
  }

  @Post()
  storeCategory(@Body() payload: any) {
    return {
      message: 'Store Category',
      payload,
    };
  }

  @Put(':id')
  updateCategory(@Param('id') id: number, @Body() payload: any) {
    return {
      message: 'Update Category',
      id,
      payload,
    };
  }

  @Delete(':id')
  deleteCategory(@Param('id') id: number) {
    return {
      message: 'Delete Category',
      id,
    };
  }

  @Get(':id/products/:productId')
  getProductByCategory(
    @Param('id') id: string,
    @Param('productId') productId: string,
  ) {
    return {
      category: id,
      product: productId,
    };
  }
}
