import { Injectable, Module } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
    imports: [PrismaService]
})

@Injectable()
export class UserService {

    constructor(private prisma: PrismaService) {}

    async user(where: Prisma.UserWhereUniqueInput) {
        return this.prisma.user.findUnique({ where, });
    }

    async createUser(data: Prisma.UserCreateInput) {
        return this.prisma.user.create({ data });
    }
}
