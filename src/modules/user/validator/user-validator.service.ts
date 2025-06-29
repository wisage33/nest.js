import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/user.repository';
import { UserDto } from '../dto/user.dto';

@Injectable()
export class UserValidator {
  constructor(private readonly userRepository: UserRepository) {}

  async checkUnique(userDto: UserDto) {
    const { login, email } = userDto;

    const existsEmail = await this.userRepository.findUnique({
      email,
    });
    if (existsEmail) {
      throw new HttpException('Email exists', HttpStatus.CONFLICT);
    }

    if (!login) return;

    const existsLogin = await this.userRepository.findUnique({
      login,
    });
    if (existsLogin) {
      throw new HttpException('Login exists', HttpStatus.CONFLICT);
    }
  }
}
