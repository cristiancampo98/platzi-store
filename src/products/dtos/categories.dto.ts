import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Name of category' })
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly createdAt: string;
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
