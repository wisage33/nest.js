import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/core/prisma/prisma.service";

@Injectable()
export class ShopRepository {
    constructor(
        private readonly prismaService: PrismaService
    ) {}

    async create(id: number, name: string) {
        const shop = await this.prismaService.shop.create({
            data: {
                name,
                owner: {
                    connect: { id }
                }
            }
        })
        return shop;
    }

    async delete(id: number) {
        const result = await this.prismaService.shop.delete({
            where: {
                id
            },
        });
        return result;
    }
}