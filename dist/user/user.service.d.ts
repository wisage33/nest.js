import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    createUser(data: Prisma.UserCreateInput): Promise<{
        id: number;
        login: string;
        password: string;
        createdAt: Date;
    } | {
        statusCode: number;
        message: string;
    } | {
        message: string;
        statusCode?: undefined;
    } | undefined>;
}
