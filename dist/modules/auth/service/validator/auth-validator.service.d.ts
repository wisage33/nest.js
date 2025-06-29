import { UserRepository } from 'src/modules/user/repository/user.repository';
import { CredentialsDto } from '../../dto/credential.dto';
import { AuthJwtService } from '../jwt/jwt.service';
export declare class AuthValidator {
    private readonly userRepository;
    private readonly authJwtService;
    constructor(userRepository: UserRepository, authJwtService: AuthJwtService);
    validateUserByLogin(login: string): Promise<{
        shops: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            userId: number;
        }[];
    } & {
        id: number;
        email: string | null;
        login: string | null;
        hashedPassword: string;
        balance: number | null;
        refreshToken: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    validateUserById(id: number): Promise<{
        shops: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            userId: number;
        }[];
    } & {
        id: number;
        email: string | null;
        login: string | null;
        hashedPassword: string;
        balance: number | null;
        refreshToken: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    validateCredentials(credentialsDto: CredentialsDto): Promise<{
        shops: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            userId: number;
        }[];
    } & {
        id: number;
        email: string | null;
        login: string | null;
        hashedPassword: string;
        balance: number | null;
        refreshToken: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    validateRefreshTokens(refreshToken: string): Promise<any>;
    validationPassword(password: string, hashedPassword: string): Promise<boolean>;
}
