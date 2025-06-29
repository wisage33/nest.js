import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Request,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation } from '@nestjs/swagger';
import { itemCreateDto } from './dto/item-create.dto';
import { ItemService } from './item.service';
import { ItemUpdateDto } from './dto/item-update.dto';

@Controller('shops')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create items for shop' })
  @ApiBody({
    schema: {
      example: {
        name: 'bottle',
        quantity: 0,
        price: 0,
      },
    },
  })
  @Post(':shopId/items')
  create(
    @Request() req,
    @Param('shopId', ParseIntPipe) shopId: number,
    @Body() itemCreateDto: itemCreateDto,
  ) {
    const userId = req.userId;
    return this.itemService.createItem(itemCreateDto, shopId, userId);
  }

  @Get(':shopId')
  async getItems(@Param('shopId', ParseIntPipe) shopId: number) {
    return this.itemService.getAllItems(shopId);
  }

  @Patch(':shopId/items/:itemId')
  async updateItem(
    @Param('shopId', ParseIntPipe) shopId: number,
    @Param('itemId', ParseIntPipe) id: number,
    @Body() itemUpdateDto: ItemUpdateDto,
  ) {
    return this.itemService.updateItem({ shopId, id, ...itemUpdateDto });
  }

  @Delete(':shopId/items/:itemId')
  async deleteItem(
    @Param('shopId', ParseIntPipe) shopId: number,
    @Param('itemId', ParseIntPipe) id: number,
  ) {
    return this.itemService.deleteItem({ id, shopId });
  }
}
