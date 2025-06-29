import { PrismaService } from "src/core/prisma/prisma.service";
export declare class ShopRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(id: number, name: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        userId: number;
    }>;
    delete(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        userId: number;
    }>;
}
