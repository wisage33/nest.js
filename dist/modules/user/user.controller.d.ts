import { UserService } from './user.service';
import { Prisma } from '@prisma/client';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(userData: Prisma.UserCreateInput): Promise<{
        id: number;
        login: string;
        password: string;
        createdAt: Date;
        refreshToken: string | null;
    } | {
        statusCode: number;
        message: string;
    } | {
        message: string;
        statusCode?: undefined;
    } | undefined>;
    getProfile(req: any): Promise<any>;
}
