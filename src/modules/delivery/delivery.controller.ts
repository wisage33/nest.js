import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../auth/guard/auth.guard';
import { ApiBearerAuth, ApiBody, ApiProperty } from '@nestjs/swagger';
import { DeliveryService } from './delivery.service';
import { DeliveryOwnerGuard } from './guard/delivery-owner.guard';
import { enumStatus, UpdateStatusDto } from './dto/update-status.dto';
import { ShopOwnerGuard } from './guard/shop-owner.guard';

@Controller('delivery')
@UseGuards(AuthGuard)
@ApiBearerAuth()
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @UseGuards(DeliveryOwnerGuard)
  @Get(':deliveryId/status')
  async status(
    @Param('deliveryId', ParseIntPipe) deliveryId: number,
    @Request() req,
  ) {
    const userId = req.user.id;
    return this.deliveryService.getStatus({ id: deliveryId });
  }

  @Patch(':deliveryId/status')
  @UseGuards(ShopOwnerGuard)
  @ApiProperty({
    enum: enumStatus,
    example: enumStatus.onWay,
  })
  @ApiBody({
    enum: enumStatus,
    examples: {
      example1: {
        value: { status: enumStatus.onWay },
      },
    },
  })
  async updateStatus(
    @Param('deliveryId', ParseIntPipe) id: number,
    @Body() updateStatusDto: UpdateStatusDto,
  ) {
    const status = updateStatusDto.status;
    return this.deliveryService.updateStatus({ id, status });
  }
}
