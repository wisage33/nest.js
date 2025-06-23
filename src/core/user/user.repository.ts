import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { userDto } from "../dto/user.dto";

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

    async findUnique(userId: number) {
        return await this.prismaService.user.findUnique({ where: { id: userId }})
    }


}