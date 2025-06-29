import { UserService } from './user.service';
import { UserCreateDto } from './dto/user-create.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    userCreate(userCreateDto: UserCreateDto): Promise<{
        id: number;
        email: string | null;
        login: string | null;
        hashedPassword: string;
        balance: number | null;
        refreshToken: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getProfile(req: any): Promise<any>;
}
