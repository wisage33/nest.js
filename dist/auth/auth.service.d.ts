import { DTOLogin } from 'src/dto/login.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private prisma;
    private jwt;
    constructor(prisma: PrismaService, jwt: JwtService);
    signIn(userData: DTOLogin): Promise<{
        access_token: string;
    }>;
}
