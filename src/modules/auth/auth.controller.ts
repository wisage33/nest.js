import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginDto } from 'src/modules/auth/dto/login.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Request, Response } from 'express';

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
  async signIn(@Body() userData: loginDto, @Res({ passthrough: true }) res: Response) {
    const tokens = await this.authService.signIn(userData);

    res.cookie('refresh_token', tokens.refresh_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict'
    });

    return { access_token: tokens.access_token };
  }

  @Get('refresh')
  async refreshTokens(@Req() req: Request) {
    const refresh_token = req.cookies['refresh_token'];
    return this.authService.refreshToken(refresh_token);
  }
}
