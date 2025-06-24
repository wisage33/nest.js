import { UserService } from './user.service';
import { UserCreateDto } from './dto/user-create.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    userCreate(userCreateDto: UserCreateDto): Promise<{
        login: string;
        password: string;
        id: number;
        createdAt: Date;
        refreshToken: string | null;
    }>;
    getProfile(req: any): Promise<any>;
}
