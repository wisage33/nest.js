import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from 'src/modules/auth/dto/login.dto';
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
  async signIn(@Body() loginDto: LoginDto, @Res({ passthrough: true }) res: Response) {
    const {access_token, refresh_token } = await this.authService.signIn(loginDto);

    res.cookie('refresh_token', refresh_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict'
    });

    return { access_token };
  }

  @Get('refresh')
  async refreshTokens(@Req() req: Request, @Res({ passthrough: true}) res: Response) {
    const refreshToken = req.cookies['refresh_token'];

    const currentTokens = await this.authService.refreshTokens(refreshToken);
    res.cookie('refresh_token', currentTokens.refresh_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict'
    });
    return {
      access_token: currentTokens.access_token
    }
  }
}
