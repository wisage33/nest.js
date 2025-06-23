import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from 'src/modules/auth/dto/login.dto';
import * as bcrypt from 'bcrypt';
import { TokenResponseDTO } from './dto/token-response.dto';
import { UserRepository } from 'src/modules/user/repository/user.repository';
import { JwtRepository } from './repository/jwt/jwt.service';
import { Payload } from './dto/payload.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly jwtRepository: JwtRepository,
    ) {}

    async signIn(loginDto: LoginDto): Promise<TokenResponseDTO> {

        const { login, password } = loginDto;
        const dbUser = await this.userRepository.findUnique({ login });
        if(!dbUser) {
            throw new NotFoundException()
        };

        const validPassword = await bcrypt.compare(password, dbUser.password);

        if(!validPassword) {
            throw new UnauthorizedException("Password isn't valid")
        };

        const payload = { sub: dbUser.id };
        const tokens = this.generateTokens(payload);

        const hashedRefreshToken = await bcrypt.hash((await tokens).refresh_token, 10);
        await this.userRepository.update({ id: payload.sub }, { refreshToken: hashedRefreshToken })

        return tokens;
    }

    async generateTokens(payload: Payload) {
        const [access_token, refresh_token] = await Promise.all([
            this.jwtRepository.signAsync(payload, "15m"),
            this.jwtRepository.signAsync(payload, "7d")
        ])

        return {
            access_token,
            refresh_token
        }
    }

    async refreshToken(refreshToken: string) {
        const {sub, payload} = this.jwtRepository.decode(refreshToken);
        const dbUser = await this.userRepository.findUnique({ id: sub });
        if(!dbUser || !dbUser.refreshToken) {
            throw new NotFoundException('Refresh token not found');
        };

        const isValidToken = await bcrypt.compare(refreshToken, dbUser.refreshToken)
        if(!isValidToken) {
            throw new UnauthorizedException();
        };

        const tokens = await this.generateTokens({ sub });
        const hashedRefreshToken = await bcrypt.hash(tokens.refresh_token, 10);
        await this.userRepository.update({ id: sub }, { refreshToken: hashedRefreshToken });

        return {
            access_token: tokens.access_token,
            refresh_token: tokens.refresh_token
        };
    }
}
