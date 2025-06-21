import { AuthService } from './auth.service';
import { loginDto } from 'src/modules/user/dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(userData: loginDto): Promise<{
        access_token: string;
    }>;
}
