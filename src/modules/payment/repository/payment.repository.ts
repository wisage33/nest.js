import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { ReplishDto } from '../dto/replish.dto';
import { PurchaseItemDto } from '../dto/purchase-item.dto';

@Injectable()
export class PaymentRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(replishDto: ReplishDto) {
    const { amount, userId } = replishDto;
    return this.prismaService.transaction.create({
      data: {
        amount,
        user: {
          connect: { id: userId },
        },
      },
    });
  }

  async purchaseItem(purchaseItemDto: PurchaseItemDto) {
    const { itemId, userId, quantity } = purchaseItemDto;
    const purchaseTransaction = this.prismaService.$transaction(async (tx) => {
      const quantity = purchaseItemDto.quantity;
      const item = await tx.item.findUnique({
        where: { id: itemId },
        include: { shop: true },
      });
      if (!item) {
        throw new NotFoundException('Item not found');
      }
      if (item.quantity < quantity) {
        throw new BadRequestException(
          'Quantity items goods is less than requested',
        );
      }
      const user = await tx.user.findUnique({
        where: { id: userId },
      });
      if (!user) {
        throw new NotFoundException('User not found');
      }
      const purchaseAmount = item.price * quantity;
      if (user.balance != null && user.balance < purchaseAmount) {
        throw new BadRequestException('Not enough funds');
      }
      const purchase = await tx.transaction.create({
        data: {
          user: {
            connect: { id: userId },
          },
          item: {
            connect: { id: itemId },
          },
          amount: purchaseAmount,
          Delivery: {
            create: {
              status: 'pending',
            },
          },
        },
      });
      await tx.user.update({
        where: { id: userId },
        data: {
          balance: { decrement: purchaseAmount },
        },
      });
      await tx.item.update({
        where: {
          id: itemId,
        },
        data: {
          quantity: { decrement: quantity },
        },
      });
      return purchase;
    });
    return purchaseTransaction;
  }

  async findAllTransactionsByUser(userId: number) {
    return this.prismaService.transaction.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        item: true,
      },
    });
  }
}
