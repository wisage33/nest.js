import { CanActivate, ExecutionContext, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { ApiBasicAuth } from '@nestjs/swagger';
import { Request } from 'express';
import { AuthJwtService } from './services/jwt/jwt.service';
import { AuthValidator } from './services/validator/auth-validator.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private readonly authJwtService: AuthJwtService,
    private readonly authValidator: AuthValidator
  ) {}

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {

    const request = context.switchToHttp().getRequest<Request>();
    const token = this.extractTokenFromHeaders(request);
    if(!token) {
      throw new UnauthorizedException();
    }

    const payload = await this.authJwtService.verifyAsync(token);
    const user = await this.authValidator.validateUserById(payload.sub);

    request['user'] = {
      ...user,
      ...payload
    };

    return true;
  }

  private extractTokenFromHeaders(requset: Request): string | undefined {
    const [type, token] = requset.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined
  }

}
