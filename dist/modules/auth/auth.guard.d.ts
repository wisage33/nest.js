import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtRepository } from './repository/jwt/jwt.service';
export declare class AuthGuard implements CanActivate {
    private readonly jwtRepository;
    constructor(jwtRepository: JwtRepository);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
    private extractTokenFromHeaders;
}
