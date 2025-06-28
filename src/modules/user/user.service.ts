import * as bcrypt from 'bcrypt';
import { UserRepository } from 'src/modules/user/repository/user.repository';
import { UserCreateDto } from './dto/user-create.dto';
import { Injectable } from '@nestjs/common';
import { UserValidator } from './validator/user-validator.service';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly userValidator: UserValidator,
  ) {}

  async userCreate(userCreateDto: UserCreateDto) {
    const { email, login, password } = userCreateDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    await this.userValidator.checkUnique({ email, login });
    const user = await this.userRepository.create({
      email,
      login,
      hashedPassword,
    });
    return user;
  }
}
