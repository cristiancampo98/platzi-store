import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get(':id')
  getUser(@Param('id') id: number) {
    return {
      id,
    };
  }

  @Get()
  getUsers() {
    return {
      message: 'All Users',
    };
  }

  @Post()
  storeUser(@Body() payload: any) {
    return {
      message: 'Store User',
      payload,
    };
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() payload: any) {
    return {
      message: 'Update User',
      id,
      payload,
    };
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return {
      message: 'Delete User',
      id,
    };
  }
}
