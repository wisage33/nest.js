import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TimeModule } from './time/time.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UserModule, TimeModule, PrismaModule]
})
export class AppModule {}
