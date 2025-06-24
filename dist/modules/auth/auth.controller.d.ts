import { AuthService } from './auth.service';
import { LoginDto } from 'src/modules/auth/dto/login.dto';
import { Request, Response } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(loginDto: LoginDto, res: Response): Promise<{
        access_token: string;
    }>;
    refreshTokens(req: Request, res: Response): Promise<{
        access_token: string;
    }>;
}
