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
const user_repository_1 = require("../user/repository/user.repository");
const jwt_service_1 = require("./services/jwt/jwt.service");
const auth_validator_service_1 = require("./services/validator/auth-validator.service");
let AuthService = class AuthService {
    userRepository;
    authJwtService;
    authValidator;
    constructor(userRepository, authJwtService, authValidator) {
        this.userRepository = userRepository;
        this.authJwtService = authJwtService;
        this.authValidator = authValidator;
    }
    async signIn(loginDto) {
        const user = await this.authValidator.validateCredentials(loginDto);
        const payload = { sub: user.id };
        const tokens = this.generateTokens(payload);
        const hashedRefreshToken = await bcrypt.hash((await tokens).refresh_token, 10);
        await this.userRepository.update({ id: payload.sub }, { refreshToken: hashedRefreshToken });
        return tokens;
    }
    async generateTokens(payload) {
        const [access_token, refresh_token] = await Promise.all([
            this.authJwtService.signAsync(payload, "15m"),
            this.authJwtService.signAsync(payload, "7d")
        ]);
        return {
            access_token,
            refresh_token
        };
    }
    async refreshTokens(refreshToken) {
        const sub = await this.authValidator.validateRefreshTokens(refreshToken);
        const { access_token, refresh_token } = await this.generateTokens({ sub });
        const hashedRefreshToken = await bcrypt.hash(refresh_token, 10);
        await this.userRepository.update({ id: sub }, { refreshToken: hashedRefreshToken });
        return {
            access_token,
            refresh_token
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        jwt_service_1.AuthJwtService,
        auth_validator_service_1.AuthValidator])
], AuthService);
//# sourceMappingURL=auth.service.js.map