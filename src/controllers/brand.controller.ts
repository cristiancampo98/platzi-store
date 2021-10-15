import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('brand')
export class BrandController {
  @Get(':id')
  getBrand(@Param('id') id: number) {
    return {
      id,
    };
  }

  @Get()
  getBrands() {
    return {
      message: 'All brands',
    };
  }

  @Post()
  storeBrand(@Body() payload: any) {
    return {
      message: 'Store brand',
      payload,
    };
  }

  @Put(':id')
  updateBrand(@Param('id') id: number, @Body() payload: any) {
    return {
      message: 'Update brand',
      id,
      payload,
    };
  }

  @Delete(':id')
  deleteBrand(@Param('id') id: number) {
    return {
      message: 'Delete brand',
      id,
    };
  }
}
