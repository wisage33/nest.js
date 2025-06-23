import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { CoreModule } from 'src/core/core.module';


@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    CoreModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT,
      signOptions: { 'expiresIn': '60s'}
    })
  ]
})
export class AuthModule {}