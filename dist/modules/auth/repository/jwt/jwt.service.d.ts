import { JwtService } from "@nestjs/jwt";
import { Payload } from "../../dto/payload.dto";
export declare class JwtRepository {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    decode(payload: any): any;
    signAsync(payload: Payload, expiresIn: number | string): Promise<string>;
    verifyAsync(payload: any): Promise<any>;
}
