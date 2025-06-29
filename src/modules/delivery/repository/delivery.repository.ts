import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { DeliveryValidator } from '../validator/delivery-validator.service';

@Injectable()
export class DeliveryRepository {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly deliveryValidator: DeliveryValidator,
  ) {}

  async getDelivery(where: Prisma.DeliveryWhereUniqueInput) {
    return this.prismaService.delivery.findUnique({
      where,
      include: {
        purchase: true,
      },
    });
  }

  async changeStatus(
    where: Prisma.DeliveryWhereUniqueInput,
    data: Prisma.DeliveryUpdateInput,
  ) {
    return this.prismaService.delivery.update({
      where,
      data,
    });
  }
}
