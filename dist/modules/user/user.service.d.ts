import { UserRepository } from 'src/modules/user/repository/user.repository';
import { UserCreateDto } from './dto/user-create.dto';
import { UserValidator } from './validator/user-validator.service';
export declare class UserService {
    private readonly userRepository;
    private readonly userValidator;
    constructor(userRepository: UserRepository, userValidator: UserValidator);
    userCreate(userCreateDto: UserCreateDto): Promise<void>;
}
