import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { TimeModule } from './modules/time/time.module';
import { PrismaModule } from './core/prisma/prisma.module';
import { PrismaService } from './core/prisma/prisma.service';
import { UserService } from './modules/user/user.service';
import { TimeService } from './modules/time/time.service';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { CoreModule } from './core/core.module';

@Module({
  imports: [
    CoreModule,
    UserModule,
    TimeModule,
    PrismaModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './env'
    })
  ],
  providers: [PrismaService, UserService, TimeService]
})
export class AppModule {}
