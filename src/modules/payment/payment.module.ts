import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { AuthModule } from '../auth/auth.module';
import { PaymentRepository } from './repository/payment.repository';
import { PrismaModule } from 'src/core/prisma/prisma.module';
import { UserRepository } from '../user/repository/user.repository';

@Module({
  imports: [AuthModule, PrismaModule],
  providers: [PaymentService, PaymentRepository, UserRepository],
  controllers: [PaymentController],
})
export class PaymentModule {}
