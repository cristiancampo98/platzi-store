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
import { CreateBrandDto, UpdateBrandDto } from 'src/products/dtos/brands.dto';
import { BrandsService } from '../services/brands.service';

@Controller('brand')
export class BrandController {
  constructor(private brandService: BrandsService) {}

  @Get(':id')
  getBrand(@Param('id', ParseIntPipe) id: number) {
    return this.brandService.findOne(id);
  }

  @Get()
  getBrands() {
    return this.brandService.findAll();
  }

  @Post()
  storeBrand(@Body() payload: CreateBrandDto) {
    return this.brandService.create(payload);
  }

  @Put(':id')
  updateBrand(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateBrandDto,
  ) {
    return this.brandService.update(id, payload);
  }

  @Delete(':id')
  deleteBrand(@Param('id', ParseIntPipe) id: number) {
    return this.brandService.delete(id);
  }
}
