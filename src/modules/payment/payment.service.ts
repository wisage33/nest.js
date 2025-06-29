import { Injectable } from '@nestjs/common';
import { PaymentRepository } from './repository/payment.repository';
import { ReplishDto } from './dto/replish.dto';
import { UserRepository } from '../user/repository/user.repository';
import { PurchaseItemDto } from './dto/purchase-item.dto';

@Injectable()
export class PaymentService {
  constructor(
    private readonly PaymentRepository: PaymentRepository,
    private readonly UserRepositoru: UserRepository,
  ) {}

  async replish(replishDto: ReplishDto) {
    const operation = await this.PaymentRepository.create({ ...replishDto });
    const updatedBalance = await this.UserRepositoru.update(
      { id: replishDto.userId },
      {
        balance: {
          increment: replishDto.amount,
        },
      },
    );
    return { operation, updatedBalance };
  }

  async purchaseItem(purchaseItemDto: PurchaseItemDto) {
    return this.PaymentRepository.purchaseItem(purchaseItemDto);
  }

  async userHistory(userId: number) {
    return this.PaymentRepository.findAllTransactionsByUser(userId);
  }
}
