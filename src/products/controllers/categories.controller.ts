import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/categories.dto';
import { CategoriesService } from '../services/categories.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private categoryService: CategoriesService) { }
  @Get(':id')
  getCategory(@Param('id', ParseIntPipe) id: number) {
    return this.categoryService.findOne(id);
  }

  @Get()
  getCategories() {
    return this.categoryService.findAll();
  }

  @Post()
  storeCategory(@Body() payload: CreateCategoryDto) {
    return this.categoryService.create(payload);
  }

  @Put(':id')
  updateCategory(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCategoryDto,
  ) {
    return this.categoryService.update(id, payload);
  }

  @Delete(':id')
  deleteCategory(@Param('id', ParseIntPipe) id: number) {
    return this.categoryService.delete(id);
  }

  @ApiOperation({
    summary: 'Retrieved a one product of one category',
  })
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
