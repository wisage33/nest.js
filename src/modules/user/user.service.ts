import * as bcrypt from 'bcrypt';
import { UserRepository } from 'src/modules/user/repository/user.repository';
import { UserCreateDto } from './dto/user-create.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    constructor(private readonly userRepository: UserRepository) {}

    async userCreate(userCreateDto: UserCreateDto) {
        const { login, password } = userCreateDto;
        const hashedPassword = await bcrypt.hash(password, 10);
        return this.userRepository.create({
            login,
            password: hashedPassword
        })
    }
}
