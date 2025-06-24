import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './repository/user.repository';
import { PrismaModule } from 'src/core/prisma/prisma.module';
import { AuthJwtService } from '../auth/services/jwt/jwt.service';
import { AuthValidator } from '../auth/services/validator/auth-validator.service';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService, UserRepository, AuthJwtService, AuthValidator],
  exports: [UserRepository]
})
export class UserModule {}
