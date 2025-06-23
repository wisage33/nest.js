import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(UserDto: UserDto): Promise<{
        id: number;
        login: string;
        password: string;
        createdAt: Date;
        refreshToken: string | null;
    }>;
    getProfile(req: any): Promise<any>;
}
