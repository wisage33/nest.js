import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from '@prisma/client';
import { AuthGuard } from 'src/shared/guards/auth.guard';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async createUser(@Body() userData: Prisma.UserCreateInput) {
    return this.userService.createUser(userData);
  }

  @UseGuards(AuthGuard)
  @Get('me')
  async getProfile(@Request() req) {
    return req.user;
  }
}
