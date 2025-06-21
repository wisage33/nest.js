import { loginDto } from 'src/modules/user/dto/login.dto';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private prisma;
    private jwt;
    constructor(prisma: PrismaService, jwt: JwtService);
    signIn(userData: loginDto): Promise<{
        access_token: string;
    }>;
}
