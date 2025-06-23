import { BadRequestException, Injectable, Module } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { UserRepository } from 'src/core/user/user.repository';

@Injectable()
export class UserService {

    constructor(private readonly prisma: UserRepository) {}

    async createUser(data: Prisma.UserCreateInput) {

        if(!data) {
            throw new BadRequestException();
        }

        const hashedPassword = await bcrypt.hash(data.password, 10);
        return this.prisma.create({
            ...data,
            password: hashedPassword
        })
    }
}
