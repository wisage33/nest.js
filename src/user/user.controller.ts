import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';

type UserData = { login: string, password: string};

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create')
  async createUser(@Body() userData: UserData) {
    return this.userService.createUser(userData);
  }
}
