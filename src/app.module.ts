import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TimeModule } from './time/time.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { UserService } from './user/user.service';
import { TimeService } from './time/time.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, TimeModule, PrismaModule, AuthModule],
  providers: [PrismaService, UserService, TimeService]
})
export class AppModule {}
