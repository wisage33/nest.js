import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { AuthJwtService } from './service/jwt/jwt.service';
import { AuthValidator } from './service/validator/auth-validator.service';
import { AuthGuard } from './guard/auth.guard';

@Module({
  controllers: [AuthController],
  providers: [AuthService, AuthJwtService, AuthValidator, AuthGuard],
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: process.env.ACCESS_SECRET,
    }),
  ],
  exports: [
    AuthGuard,
    AuthJwtService,
    AuthValidator
  ]
})
export class AuthModule {}
