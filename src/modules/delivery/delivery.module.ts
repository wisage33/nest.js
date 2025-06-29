import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { PrismaModule } from 'src/core/prisma/prisma.module';
import { DeliveryService } from './delivery.service';
import { DeliveryController } from './delivery.controller';
import { DeliveryRepository } from './repository/delivery.repository';
import { DeliveryValidator } from './validator/delivery-validator.service';
import { UserRepository } from '../user/repository/user.repository';
import { DeliveryOwnerGuard } from './guard/delivery-owner.guard';
import { ShopOwnerGuard } from './guard/shop-owner.guard';
import { ShopRepository } from '../shop/repository/shop.repostory';

@Module({
  imports: [AuthModule, PrismaModule],
  providers: [
    DeliveryService,
    DeliveryRepository,
    DeliveryValidator,
    UserRepository,
    DeliveryOwnerGuard,
    ShopOwnerGuard,
    ShopRepository
  ],
  controllers: [DeliveryController],
})
export class DeliveryModule {}
