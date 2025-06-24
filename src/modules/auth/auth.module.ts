import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { AuthJwtService } from './services/jwt/jwt.service';


@Module({
  controllers: [AuthController],
  providers: [AuthService, AuthJwtService],
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: process.env.ACCESS_SECRET
    })
  ]
})
export class AuthModule {}