import { DTOLogin } from 'src/dto/login.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    signIn(userData: DTOLogin): Promise<{
        user: {
            id: number;
            login: string;
            password: string;
            createdAt: Date;
        };
    }>;
}
