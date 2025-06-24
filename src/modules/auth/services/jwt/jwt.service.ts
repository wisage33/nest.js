import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Payload } from "../../dto/payload.dto";

@Injectable()
export class AuthJwtService {
    constructor(
        private readonly jwtService: JwtService
    ) {}

    decode(payload) {
        return this.jwtService.decode(payload);
    }

    signAsync(payload: Payload, expiresIn: number | string) {
        return this.jwtService.signAsync(payload, {
            expiresIn
        })
    }

    verifyAsync(payload) {
        return this.jwtService.verifyAsync(payload);
    }
}