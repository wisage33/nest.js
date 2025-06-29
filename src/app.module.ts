import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { TimeModule } from './modules/time/time.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ShopModule } from './modules/shop/shop.module';
import { CoreModule } from './core/core.module';
import { ItemModule } from './modules/item/item.module';
import { PaymentModule } from './modules/payment/payment.module';
import { DeliveryModule } from './modules/delivery/delivery.module';

@Module({
  imports: [
    DeliveryModule,
    PaymentModule,
    ItemModule,
    ShopModule,
    UserModule,
    TimeModule,
    AuthModule,
    CoreModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './env',
    }),
  ],
})
export class AppModule {}
