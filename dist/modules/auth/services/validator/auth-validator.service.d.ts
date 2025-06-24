import { UserRepository } from "src/modules/user/repository/user.repository";
import { CredentialsDto } from "../../dto/credential.dto";
import { AuthJwtService } from "../jwt/jwt.service";
export declare class AuthValidator {
    private readonly userRepository;
    private readonly authJwtService;
    constructor(userRepository: UserRepository, authJwtService: AuthJwtService);
    validateUserByLogin(login: string): Promise<{
        id: number;
        login: string;
        password: string;
        createdAt: Date;
        refreshToken: string | null;
    }>;
    validateUserById(id: number): Promise<{
        id: number;
        login: string;
        password: string;
        createdAt: Date;
        refreshToken: string | null;
    }>;
    validateCredentials(credentialsDto: CredentialsDto): Promise<{
        id: number;
        login: string;
        password: string;
        createdAt: Date;
        refreshToken: string | null;
    }>;
    validateRefreshTokens(refreshToken: string): Promise<any>;
    validationPassword(password: string, hashedPassword: string): Promise<boolean>;
}
