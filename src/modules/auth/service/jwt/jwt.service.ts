import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Payload } from '../../dto/payload.dto';
import { Request } from 'express';

@Injectable()
export class AuthJwtService {
  constructor(private readonly jwtService: JwtService) {}

  decode(payload) {
    return this.jwtService.decode(payload);
  }

  signAsync(payload: Payload, expiresIn: number | string) {
    return this.jwtService.signAsync(payload, {
      expiresIn,
    });
  }

  verifyAsync(payload) {
    return this.jwtService.verifyAsync(payload);
  }


  extractTokenFromHeaders(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    switch (type) {
      case 'Bearer':
        return token;
      default:
        return undefined;
    }
  }
}
