import { loginDto } from 'src/modules/auth/dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { TokenResponseDTO } from './dto/token.response.dto';
import { UserRepository } from 'src/core/user/user.repository';
export declare class AuthService {
    private readonly prisma;
    private jwt;
    constructor(prisma: UserRepository, jwt: JwtService);
    signIn(userData: loginDto): Promise<TokenResponseDTO>;
    generateTokens(userId: number, login: string): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    refreshToken(refresh_token: string): Promise<{
        acces_token: string;
    }>;
}
