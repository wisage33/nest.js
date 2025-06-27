import { UserService } from './user.service';
import { UserCreateDto } from './dto/user-create.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    userCreate(userCreateDto: UserCreateDto): Promise<void>;
    getProfile(req: any): Promise<any>;
}
