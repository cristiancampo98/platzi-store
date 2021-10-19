import { PartialType } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateBrandDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
  @IsString()
  @IsNotEmpty()
  readonly createdAt: string;
}

export class UpdateBrandDto extends PartialType(CreateBrandDto) { }
