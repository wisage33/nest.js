import { LoginDto } from 'src/modules/auth/dto/login.dto';
import { TokenResponseDTO } from './dto/token-response.dto';
import { UserRepository } from 'src/modules/user/repository/user.repository';
import { JwtRepository } from './repository/jwt/jwt.service';
import { Payload } from './dto/payload.dto';
export declare class AuthService {
    private readonly userRepository;
    private readonly jwtRepository;
    constructor(userRepository: UserRepository, jwtRepository: JwtRepository);
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
