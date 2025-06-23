import { Prisma } from '@prisma/client';
import { UserRepository } from 'src/core/user/user.repository';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: UserRepository);
    createUser(data: Prisma.UserCreateInput): Promise<{
        id: number;
        login: string;
        password: string;
        createdAt: Date;
        refreshToken: string | null;
    }>;
}
