import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginDto } from 'src/modules/user/dto/login.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { NotFoundError } from 'rxjs';
import { error } from 'console';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: "Authentification and get jwt token" })
  @ApiResponse({
    status: 404,
    example: {
      status: 404,
      error: "Not found"
    }
  })
  @ApiResponse({
    status: 201,
    example: {
      access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
    }
  })
  @Post('login')
  async signIn(@Body() userData: loginDto) {
    return await this.authService.signIn(userData);
  }
}
