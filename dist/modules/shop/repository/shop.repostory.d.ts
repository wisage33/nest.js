import { PrismaService } from "src/core/prisma/prisma.service";
export declare class ShopRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(id: number, name: string): Promise<{
        id: number;
        name: string;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(id: number): Promise<{
        id: number;
        name: string;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
