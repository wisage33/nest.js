import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { ApiBasicAuth } from '@nestjs/swagger';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { AuthJwtService } from './services/jwt/jwt.service';

@ApiBasicAuth()
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private readonly authJwtService: AuthJwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const request = context.switchToHttp().getRequest<Request>();
    const token = this.extractTokenFromHeaders(request);

    if(!token) {
      throw new UnauthorizedException();
    }

    try {
      const payload = this.authJwtService.verifyAsync(token);

      request['user'] = payload;
    } catch(error) {
      throw new UnauthorizedException();
    }

    return true;
  }

  private extractTokenFromHeaders(requset: Request): string | undefined {
    const [type, token] = requset.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined
  }

}
