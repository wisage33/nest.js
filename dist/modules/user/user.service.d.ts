import { UserRepository } from 'src/modules/user/repository/user.repository';
import { UserDto } from './dto/user.dto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    createUser(data: UserDto): Promise<{
        id: number;
        login: string;
        password: string;
        createdAt: Date;
        refreshToken: string | null;
    }>;
}
