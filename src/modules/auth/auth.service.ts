import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { loginDto } from 'src/modules/auth/dto/login.dto';
import { PrismaService } from 'src/core/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { TokenResponseDTO } from './dto/token.response.dto';
import { UserRepository } from 'src/core/user/user.repository';
import { UserUpdateDto } from 'src/core/dto/user.update.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly prisma: UserRepository,
        private jwt: JwtService,
    ) {}

    async signIn(userData: loginDto): Promise<TokenResponseDTO> {

        const { login, password } = userData;
        const dbUser = await this.prisma.findUnique(login);
        if(!dbUser) {
            throw new NotFoundException()
        };

        const validPassword = await bcrypt.compare(password, dbUser.password);

        if(!validPassword) {
            throw new UnauthorizedException("Password isn't valid")
        };

        const payload = { id: dbUser.id, login: dbUser.login };
        const tokens = this.generateTokens(payload.id, payload.login);

        const hashedRefreshToken = await bcrypt.hash((await tokens).refresh_token, 10);
        await this.prisma.update(login, { refreshToken: hashedRefreshToken })

        return tokens;
    }

    async generateTokens(userId: number, login: string) {
        const payload = { id: userId, login };

        const [ access_token, refresh_token ] = await Promise.all([
            this.jwt.signAsync(payload, {
                "expiresIn": "15m"
            }),
            this.jwt.signAsync(payload, {
                "expiresIn": "7d"
            }),
        ])

        return {
            access_token,
            refresh_token
        }
    }

    async refreshToken(refresh_token: string) {
        const payload = this.jwt.decode(refresh_token);
        const dbUser = await this.prisma.findUnique(payload.login);
        if(!dbUser || !dbUser.refreshToken) {
            throw new NotFoundException('Refresh token not found');
        };

        const isValidToken = await bcrypt.compare(refresh_token, dbUser.refreshToken)
        if(!isValidToken) {
            throw new UnauthorizedException();
        };

        const tokens = await this.generateTokens(dbUser.id, dbUser.login);
        const hashedRefreshToken = await bcrypt.hash(tokens.refresh_token, 10);
        await this.prisma.update(payload.login, { refreshToken: hashedRefreshToken });

        return { acces_token: tokens.access_token };
    }
}
