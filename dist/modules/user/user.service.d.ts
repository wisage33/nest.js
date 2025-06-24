import { UserRepository } from 'src/modules/user/repository/user.repository';
import { UserCreateDto } from './dto/user-create.dto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    userCreate(userCreateDto: UserCreateDto): Promise<{
        id: number;
        login: string;
        password: string;
        createdAt: Date;
        refreshToken: string | null;
    }>;
}
