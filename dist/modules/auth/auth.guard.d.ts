import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
export declare class AuthGuard implements CanActivate {
    private jwt;
    constructor(jwt: JwtService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
    private extractTokenFromHeaders;
}
