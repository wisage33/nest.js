import { UserRepository } from '../repository/user.repository';
import { UserDto } from '../dto/user.dto';
export declare class UserValidator {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    checkUnique(userDto: UserDto): Promise<void>;
}
