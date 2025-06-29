import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/core/prisma/prisma.service";
import { itemCreateDto } from "../dto/item-create.dto";
import { Prisma } from "@prisma/client";

@Injectable()
export class ItemRepository {
    constructor(
        private readonly prismaService: PrismaService
    ) {}

    async findShop(
        shopId: number,
        userId: number,
    ) {
        const shop = await this.prismaService.shop.findUnique({
            where: {
                id: shopId,
                userId
            },
            select: {
                id: true
            }
        });
        return shop;
    }

    async createItem(
        data: itemCreateDto,
        id: number
    ) {
        const { name, price, quantity } = data;
        return this.prismaService.item.create({
            data: {
                name,
                price,
                quantity,
                shop: {
                    connect: { id }
                }
            }

        })
    }

    async getAllItems(shopId: number) {
        const data = await this.prismaService.item.findMany({
            where: {
                shopId
            }
        })
        return data;
    }

    async update(
        where: Prisma.ItemWhereUniqueInput,
        data: Prisma.ItemUpdateInput
    ) {
        const updatedItem = await this.prismaService.item.update({
            where,
            data
        });
        return updatedItem;
    }

    async delete(where: Prisma.ItemWhereUniqueInput) {
        const deletedItem = await this.prismaService.item.delete({
            where
        });
        return deletedItem;
    }
}