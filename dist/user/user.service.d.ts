import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    user(where: Prisma.UserWhereUniqueInput): Promise<{
        id: number;
        login: string;
        password: string;
        createdAt: Date;
    } | null>;
    createUser(data: Prisma.UserCreateInput): Promise<{
        id: number;
        login: string;
        password: string;
        createdAt: Date;
    }>;
}
