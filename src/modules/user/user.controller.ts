import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from '@prisma/client';
import { AuthGuard } from 'src/modules/auth/auth.guard';
import { ApiBearerAuth, ApiBody, ApiHeader, ApiOperation, ApiParam, ApiProperty, ApiResponse } from '@nestjs/swagger';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: "Create new user" })
  @ApiBody({
    description: "Create a new user",
    examples: {
      example: {
        value: {
          login: "user",
          password: "12345"
        }
      }
    }
  })
  @ApiResponse({
    status: 201,
    description: "User succesfull create"
  })
  @ApiResponse({
    status: 400,
    description: "Bad request"
  })
  @Post('create')
  async createUser(@Body() userData: Prisma.UserCreateInput) {
    return this.userService.createUser(userData);
  }

  @UseGuards(AuthGuard)
  @Get('me')
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get user info"})
  @ApiResponse({
    description: "User info",
    status: 200,
    schema: {
      example: {
        id: 1,
        login: "user",
        "iat": 1750540157,
        "exp": 1750540217
      }
    }
  })
  @ApiResponse({
    status: 400,
    description: "Unauthorized"
  })
  async getProfile(@Request() req) {
    return req.user;
  }
}
