import { LoginDto } from 'src/modules/auth/dto/login.dto';
import { TokenResponseDTO } from './dto/token-response.dto';
import { UserRepository } from 'src/modules/user/repository/user.repository';
import { AuthJwtService } from './service/jwt/jwt.service';
import { Payload } from './dto/payload.dto';
import { AuthValidator } from './service/validator/auth-validator.service';
export declare class AuthService {
    private readonly userRepository;
    private readonly authJwtService;
    private readonly authValidator;
    constructor(userRepository: UserRepository, authJwtService: AuthJwtService, authValidator: AuthValidator);
    signIn(loginDto: LoginDto): Promise<TokenResponseDTO>;
    generateTokens(payload: Payload): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    refreshTokens(refreshToken: string): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
}
