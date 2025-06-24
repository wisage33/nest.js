import { LoginDto } from 'src/modules/auth/dto/login.dto';
import { TokenResponseDTO } from './dto/token-response.dto';
import { UserRepository } from 'src/modules/user/repository/user.repository';
import { AuthJwtService } from './services/jwt/jwt.service';
import { Payload } from './dto/payload.dto';
export declare class AuthService {
    private readonly userRepository;
    private readonly authJwtService;
    constructor(userRepository: UserRepository, authJwtService: AuthJwtService);
    signIn(loginDto: LoginDto): Promise<TokenResponseDTO>;
    generateTokens(payload: Payload): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    refreshToken(refreshToken: string): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
}
