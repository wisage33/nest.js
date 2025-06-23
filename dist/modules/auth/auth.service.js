"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const user_repository_1 = require("../../core/user/user.repository");
let AuthService = class AuthService {
    prisma;
    jwt;
    constructor(prisma, jwt) {
        this.prisma = prisma;
        this.jwt = jwt;
    }
    async signIn(userData) {
        const { login, password } = userData;
        const dbUser = await this.prisma.findUnique(login);
        if (!dbUser) {
            throw new common_1.NotFoundException();
        }
        ;
        const validPassword = await bcrypt.compare(password, dbUser.password);
        if (!validPassword) {
            throw new common_1.UnauthorizedException("Password isn't valid");
        }
        ;
        const payload = { id: dbUser.id, login: dbUser.login };
        const tokens = this.generateTokens(payload.id, payload.login);
        const hashedRefreshToken = await bcrypt.hash((await tokens).refresh_token, 10);
        await this.prisma.update(login, { refreshToken: hashedRefreshToken });
        return tokens;
    }
    async generateTokens(userId, login) {
        const payload = { id: userId, login };
        const [access_token, refresh_token] = await Promise.all([
            this.jwt.signAsync(payload, {
                "expiresIn": "15m"
            }),
            this.jwt.signAsync(payload, {
                "expiresIn": "7d"
            }),
        ]);
        return {
            access_token,
            refresh_token
        };
    }
    async refreshToken(refresh_token) {
        const payload = this.jwt.decode(refresh_token);
        const dbUser = await this.prisma.findUnique(payload.login);
        if (!dbUser || !dbUser.refreshToken) {
            throw new common_1.NotFoundException('Refresh token not found');
        }
        ;
        const isValidToken = await bcrypt.compare(refresh_token, dbUser.refreshToken);
        if (!isValidToken) {
            throw new common_1.UnauthorizedException();
        }
        ;
        const tokens = await this.generateTokens(dbUser.id, dbUser.login);
        const hashedRefreshToken = await bcrypt.hash(tokens.refresh_token, 10);
        await this.prisma.update(payload.login, { refreshToken: hashedRefreshToken });
        return { acces_token: tokens.access_token };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map