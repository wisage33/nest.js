import { PrismaService } from "../../../core/prisma/prisma.service";
import { UserDto } from "../dto/user.dto";
import { UserUpdateDto } from "../dto/user.update.dto";
import { Prisma } from "@prisma/client";
export declare class UserRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(userDto: UserDto): Promise<{
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
    update(where: Prisma.UserWhereUniqueInput, userUpdateDto: UserUpdateDto): Promise<{
        id: number;
        login: string;
        password: string;
        createdAt: Date;
        refreshToken: string | null;
    }>;
}
