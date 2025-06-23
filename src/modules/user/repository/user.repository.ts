import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../core/prisma/prisma.service";
import { UserDto } from "../dto/user.dto";
import { UserUpdateDto } from "../dto/user.update.dto";
import { Prisma } from "@prisma/client";

@Injectable()
export class UserRepository {
    constructor(private readonly prismaService: PrismaService) {};

    async create(userDto: UserDto) {
        return this.prismaService.user.create({
            data: userDto
        })
    };

    async findUnique(where: Prisma.UserWhereUniqueInput) {
        return this.prismaService.user.findUnique({
            where,
        });
    }

    async update(where: Prisma.UserWhereUniqueInput, userUpdateDto: UserUpdateDto) {
        return this.prismaService.user.update({
            where,
            data: userUpdateDto
        })
    }
}