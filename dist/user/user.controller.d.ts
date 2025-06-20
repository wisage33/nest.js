import { UserService } from './user.service';
type UserData = {
    login: string;
    password: string;
};
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(userData: UserData): Promise<{
        id: number;
        login: string;
        password: string;
        createdAt: Date;
    }>;
}
export {};
