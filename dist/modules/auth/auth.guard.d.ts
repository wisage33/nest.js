import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthJwtService } from './services/jwt/jwt.service';
export declare class AuthGuard implements CanActivate {
    private readonly authJwtService;
    constructor(authJwtService: AuthJwtService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
    private extractTokenFromHeaders;
}
