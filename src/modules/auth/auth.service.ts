import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { loginDto } from 'src/modules/auth/dto/login.dto';
import { PrismaService } from 'src/core/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { TokenResponseDTO } from './dto/token.response.dto';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwt: JwtService,
    ) {}

    async signIn(userData: loginDto): Promise<TokenResponseDTO> {

        const { login, password } = userData;
        const dbUser = await this.prisma.user.findUnique({ where: { login } });
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
        await this.prisma.user.update({
            where: { id: dbUser.id },
            data: { refreshToken: hashedRefreshToken }
        })

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

    async refreshToken(refresh_token, userId) {
        const payload = this.jwt.decode(refresh_token)
        const dbUser = await this.prisma.user.findUnique({ where: { id: payload.id }})
        if(!dbUser || !dbUser.refreshToken) {
            throw new NotFoundException('Refresh token not found');
        }

        const isValidUser = await bcrypt.compare(refresh_token, dbUser.refreshToken)

        const tokens = await this.generateTokens(dbUser.id, dbUser.login);
        const hashedRefreshToken = await bcrypt.hash(tokens.refresh_token, 10);
        await this.prisma.user.update({
            where: { id: dbUser.id },
            data: { refreshToken: hashedRefreshToken }
        })

        return { acces_token: tokens.access_token }
    }
}
