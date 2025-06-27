import { PrismaService } from '../../../core/prisma/prisma.service';
import { UserCreateDto } from '../dto/user-create.dto';
import { Prisma } from '@prisma/client';
export declare class UserRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(userDto: UserCreateDto): Promise<{
        id: number;
        login: string;
        password: string;
        createdAt: Date;
        refreshToken: string | null;
    }>;
    findUnique(where: Prisma.UserWhereUniqueInput): Promise<{
        id: number;
        login: string;
        password: string;
        createdAt: Date;
        refreshToken: string | null;
    } | null>;
    update(where: Prisma.UserWhereUniqueInput, data: Prisma.UserUpdateInput): Promise<{
        id: number;
        login: string;
        password: string;
        createdAt: Date;
        refreshToken: string | null;
    }>;
}
