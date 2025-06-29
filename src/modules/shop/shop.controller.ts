import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ShopRepository } from './repository/shop.repostory';
import { AuthGuard } from '../auth/guard/auth.guard';
import { ApiBearerAuth, ApiBody, ApiOperation } from '@nestjs/swagger';

@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('shop')
export class ShopController {
  constructor(private readonly shopRepository: ShopRepository) {}

  @ApiOperation({ summary: 'Create a shop for user' })
  @ApiBody({
    schema: {
      example: {
        name: '',
      },
    },
  })
  @Post('create')
  async createShop(@Request() req, @Body() shopDto) {
    console.log(shopDto);
    const userId = req.user?.id;
    return this.shopRepository.create(userId, shopDto.name);
  }

  @Delete('delete/:id')
  async deleteShop(@Param('id', ParseIntPipe) id: number) {
    return this.shopRepository.delete(id);
  }
}
