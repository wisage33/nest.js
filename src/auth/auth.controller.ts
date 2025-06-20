import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { DTOLogin } from 'src/dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async signIn(@Body() userData: DTOLogin) {
    return await this.authService.signIn(userData);
  }
}
