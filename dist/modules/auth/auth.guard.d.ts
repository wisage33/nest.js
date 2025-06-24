import { CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthJwtService } from './services/jwt/jwt.service';
import { AuthValidator } from './services/validator/auth-validator.service';
export declare class AuthGuard implements CanActivate {
    private readonly authJwtService;
    private readonly authValidator;
    constructor(authJwtService: AuthJwtService, authValidator: AuthValidator);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractTokenFromHeaders;
}
