import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ReplishDto } from './dto/replish.dto';
import { PaymentService } from './payment.service';
import { AuthGuard } from '../auth/guard/auth.guard';
import { ApiBearerAuth, ApiBody, ApiOperation } from '@nestjs/swagger';
import { PurchaseItemDto } from './dto/purchase-item.dto';

@Controller('payments')
@UseGuards(AuthGuard)
@ApiBearerAuth()
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('replish')
  async replishBalance(@Request() req, @Body() replishDto: ReplishDto) {
    const userId = req.user.id;
    return this.paymentService.replish({ ...replishDto, userId });
  }

  @Post(':itemId')
  @ApiOperation({ summary: 'Purchase item' })
  @ApiBody({
    schema: {
      example: {
        quantity: 0,
      },
    },
  })
  async buyItem(
    @Request() req,
    @Param('itemId', ParseIntPipe) itemId: number,
    @Body() purchaseItemDto: PurchaseItemDto,
  ) {
    const userId = req.user.id;
    const quantity = purchaseItemDto.quantity;
    return await this.paymentService.purchaseItem({ itemId, quantity, userId });
  }

  @Get('history')
  async userHistory(@Request() req) {
    const id = req.user.id;
    return this.paymentService.userHistory(id);
  }
}
