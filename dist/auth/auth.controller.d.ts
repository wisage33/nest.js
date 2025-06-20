import { AuthService } from './auth.service';
import { DTOLogin } from 'src/dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(userData: DTOLogin): Promise<{
        access_token: string;
    }>;
}
