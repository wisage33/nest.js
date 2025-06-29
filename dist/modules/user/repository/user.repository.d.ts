import { PrismaService } from '../../../core/prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class UserRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(data: Prisma.UserCreateInput): Promise<{
        id: number;
        email: string | null;
        login: string | null;
        hashedPassword: string;
        balance: number | null;
        refreshToken: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findUnique(where: Prisma.UserWhereUniqueInput): Promise<({
        shops: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            userId: number;
        }[];
    } & {
        id: number;
        email: string | null;
        login: string | null;
        hashedPassword: string;
        balance: number | null;
        refreshToken: string | null;
        createdAt: Date;
        updatedAt: Date;
    }) | null>;
    update(where: Prisma.UserWhereUniqueInput, data: Prisma.UserUpdateInput): Promise<{
        id: number;
        email: string | null;
        login: string | null;
        hashedPassword: string;
        balance: number | null;
        refreshToken: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
