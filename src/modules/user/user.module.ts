import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './repository/user.repository';
import { PrismaModule } from 'src/core/prisma/prisma.module';
import { JwtRepository } from '../auth/repository/jwt/jwt.service';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService, UserRepository, JwtRepository],
  exports: [UserRepository]
})
export class UserModule {}
