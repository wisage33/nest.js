import { PrismaService } from "../prisma/prisma.service";
import { userDto } from "../dto/user.dto";
import { UserUpdateDto } from "../dto/user.update.dto";
export declare class UserRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(dto: userDto): Promise<{
        id: number;
        login: string;
        password: string;
        createdAt: Date;
        refreshToken: string | null;
    }>;
    findUnique(login: string): Promise<{
        id: number;
        login: string;
        password: string;
        createdAt: Date;
        refreshToken: string | null;
    } | null>;
    update(login: string, data: UserUpdateDto): Promise<{
        id: number;
        login: string;
        password: string;
        createdAt: Date;
        refreshToken: string | null;
    }>;
}
