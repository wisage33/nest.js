import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private jwt: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const request = context.switchToHttp().getRequest<Request>();
    const token = this.extractTokenFromHeaders(request);

    if(!token) {
      throw new UnauthorizedException();
    }

    try {
      const payload = this.jwt.verifyAsync(token, { secret: process.env.JWT });

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
