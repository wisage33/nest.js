import { CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthJwtService } from '../service/jwt/jwt.service';
import { AuthValidator } from '../service/validator/auth-validator.service';
export declare class AuthGuard implements CanActivate {
    private readonly authJwtService;
    private readonly authValidator;
    constructor(authJwtService: AuthJwtService, authValidator: AuthValidator);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
