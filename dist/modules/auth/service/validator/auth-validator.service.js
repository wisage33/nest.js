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
exports.AuthValidator = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("../../../user/repository/user.repository");
const bcrypt = require("bcrypt");
const jwt_service_1 = require("../jwt/jwt.service");
let AuthValidator = class AuthValidator {
    userRepository;
    authJwtService;
    constructor(userRepository, authJwtService) {
        this.userRepository = userRepository;
        this.authJwtService = authJwtService;
    }
    async validateUserByLogin(login) {
        const user = await this.userRepository.findUnique({ login });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return user;
    }
    async validateUserById(id) {
        const user = await this.userRepository.findUnique({ id });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return user;
    }
    async validateCredentials(credentialsDto) {
        const { login, password } = credentialsDto;
        const user = await this.validateUserByLogin(login);
        this.validationPassword(password, user.hashedPassword);
        return user;
    }
    async validateRefreshTokens(refreshToken) {
        if (!refreshToken || typeof refreshToken !== 'string') {
            throw new common_1.UnauthorizedException('Invalid refresh token');
        }
        const { sub, iat, exp } = await this.authJwtService.verifyAsync(refreshToken);
        const user = await this.userRepository.findUnique({ id: sub });
        if (!user || !user.refreshToken) {
            throw new common_1.NotFoundException('Invalid credentials');
        }
        const isValidToken = await bcrypt.compare(refreshToken, user.refreshToken);
        if (!isValidToken) {
            throw new common_1.UnauthorizedException('Refresh token is invalid');
        }
        return sub;
    }
    async validationPassword(password, hashedPassword) {
        const isValidPassword = await bcrypt.compare(password, hashedPassword);
        if (!isValidPassword) {
            throw new common_1.UnauthorizedException('Invalid password');
        }
        return true;
    }
};
exports.AuthValidator = AuthValidator;
exports.AuthValidator = AuthValidator = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        jwt_service_1.AuthJwtService])
], AuthValidator);
//# sourceMappingURL=auth-validator.service.js.map