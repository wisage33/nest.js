import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './repository/user.repository';
import { PrismaModule } from 'src/core/prisma/prisma.module';
import { AuthJwtService } from '../auth/service/jwt/jwt.service';
import { AuthValidator } from '../auth/service/validator/auth-validator.service';
import { UserValidator } from './validator/user-validator.service';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [
    UserService,
    UserRepository,
    AuthJwtService,
    AuthValidator,
    UserValidator,
  ],
  exports: [UserRepository],
})
export class UserModule {}
