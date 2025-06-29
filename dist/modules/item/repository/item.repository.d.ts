import { PrismaService } from 'src/core/prisma/prisma.service';
import { itemCreateDto } from '../dto/item-create.dto';
import { Prisma } from '@prisma/client';
export declare class ItemRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findShop(shopId: number, userId: number): Promise<{
        id: number;
    } | null>;
    createItem(data: itemCreateDto, id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        price: number;
        quantity: number;
        shopId: number;
    }>;
    getAllItems(shopId: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        price: number;
        quantity: number;
        shopId: number;
    }[]>;
    update(where: Prisma.ItemWhereUniqueInput, data: Prisma.ItemUpdateInput): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        price: number;
        quantity: number;
        shopId: number;
    }>;
    delete(where: Prisma.ItemWhereUniqueInput): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        price: number;
        quantity: number;
        shopId: number;
    }>;
}
