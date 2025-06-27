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
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_service_1 = require("../service/jwt/jwt.service");
const auth_validator_service_1 = require("../service/validator/auth-validator.service");
let AuthGuard = class AuthGuard {
    authJwtService;
    authValidator;
    constructor(authJwtService, authValidator) {
        this.authJwtService = authJwtService;
        this.authValidator = authValidator;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeaders(request);
        if (!token) {
            throw new common_1.UnauthorizedException();
        }
        const payload = await this.authJwtService.verifyAsync(token);
        const user = await this.authValidator.validateUserById(payload.sub);
        request['user'] = {
            ...user,
            ...payload,
        };
        return true;
    }
    extractTokenFromHeaders(requset) {
        const [type, token] = requset.headers.authorization?.split(' ') ?? [];
        switch (type) {
            case 'bearer':
                return token;
            default:
                return undefined;
        }
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_service_1.AuthJwtService,
        auth_validator_service_1.AuthValidator])
], AuthGuard);
//# sourceMappingURL=auth.guard.js.map