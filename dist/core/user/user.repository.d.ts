import { PrismaService } from "../prisma/prisma.service";
import { userDto } from "../dto/user.dto";
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
    findUnique(userId: number): Promise<{
        id: number;
        login: string;
        password: string;
        createdAt: Date;
        refreshToken: string | null;
    } | null>;
}
