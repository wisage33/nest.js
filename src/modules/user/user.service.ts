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
    const { login, password } = userCreateDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.userRepository.create({
      login,
      password: hashedPassword,
    });
    const isUnique = await this.userValidator.checkUnique(user);
    console.log(isUnique)
  }
}
