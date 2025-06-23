import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { userDto } from "../dto/user.dto";
import { UserUpdateDto } from "../dto/user.update.dto";

@Injectable()
export class UserRepository {
    constructor(private readonly prismaService: PrismaService) {};

    async create(dto: userDto) {
        return await this.prismaService.user.create({
            data: {
                ...dto
            }
        })
    };

    async findUnique(login: string) {
        return await this.prismaService.user.findUnique({ where: { login }})
    }

    async update(login: string, data: UserUpdateDto) {
        return await this.prismaService.user.update({
            where: { login },
            data: { ...data }
        })
    }
}