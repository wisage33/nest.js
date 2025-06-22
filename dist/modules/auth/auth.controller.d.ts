import { AuthService } from './auth.service';
import { loginDto } from 'src/modules/user/dto/login.dto';
import { Request, Response } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(userData: loginDto, res: Response): Promise<{
        access_token: string;
    }>;
    refreshTokens(dto: any, req: Request): Promise<{
        acces_token: string;
    }>;
}
