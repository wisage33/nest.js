import { BadRequestException, Injectable, Module } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { UserRepository } from 'src/modules/user/repository/user.repository';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {

    constructor(private readonly userRepository: UserRepository) {}

    async createUser(data: UserDto) {

        if(!data) {
            throw new BadRequestException();
        }
        const { login, password } = data;
        const hashedPassword = await bcrypt.hash(password, 10);
        return this.userRepository.create({
            login,
            password: hashedPassword
        })
    }
}
