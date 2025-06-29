"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const jwt_1 = require("@nestjs/jwt");
const user_module_1 = require("../user/user.module");
const jwt_service_1 = require("./service/jwt/jwt.service");
const auth_validator_service_1 = require("./service/validator/auth-validator.service");
const auth_guard_1 = require("./guard/auth.guard");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, jwt_service_1.AuthJwtService, auth_validator_service_1.AuthValidator, auth_guard_1.AuthGuard],
        imports: [
            user_module_1.UserModule,
            jwt_1.JwtModule.register({
                global: true,
                secret: process.env.ACCESS_SECRET,
            }),
        ],
        exports: [auth_guard_1.AuthGuard, jwt_service_1.AuthJwtService, auth_validator_service_1.AuthValidator],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map