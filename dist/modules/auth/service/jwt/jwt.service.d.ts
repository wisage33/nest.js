import { JwtService } from '@nestjs/jwt';
import { Payload } from '../../dto/payload.dto';
import { Request } from 'express';
export declare class AuthJwtService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    decode(payload: any): any;
    signAsync(payload: Payload, expiresIn: number | string): Promise<string>;
    verifyAsync(payload: any): Promise<any>;
    extractTokenFromHeaders(request: Request): string | undefined;
}
