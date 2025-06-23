import { loginDto } from 'src/modules/auth/dto/login.dto';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { TokenResponseDTO } from './dto/token.response.dto';
export declare class AuthService {
    private prisma;
    private jwt;
    constructor(prisma: PrismaService, jwt: JwtService);
    signIn(userData: loginDto): Promise<TokenResponseDTO>;
    generateTokens(userId: number, login: string): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    refreshToken(refresh_token: any, userId: any): Promise<{
        acces_token: string;
    }>;
}
