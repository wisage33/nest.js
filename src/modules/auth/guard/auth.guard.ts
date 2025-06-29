import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthJwtService } from '../service/jwt/jwt.service';
import { AuthValidator } from '../service/validator/auth-validator.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authJwtService: AuthJwtService,
    private readonly authValidator: AuthValidator,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const token = this.authJwtService.extractTokenFromHeaders(request);
    if (!token) {
      throw new UnauthorizedException();
    }

    const payload = await this.authJwtService.verifyAsync(token);
    const user = await this.authValidator.validateUserById(payload.sub);

    request['user'] = {
      ...user,
      ...payload,
    };

    return true;
  }
}
