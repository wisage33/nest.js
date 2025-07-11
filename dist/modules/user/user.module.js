"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const user_controller_1 = require("./user.controller");
const user_repository_1 = require("./repository/user.repository");
const prisma_module_1 = require("../../core/prisma/prisma.module");
const jwt_service_1 = require("../auth/service/jwt/jwt.service");
const auth_validator_service_1 = require("../auth/service/validator/auth-validator.service");
const user_validator_service_1 = require("./validator/user-validator.service");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [user_controller_1.UserController],
        providers: [
            user_service_1.UserService,
            user_repository_1.UserRepository,
            jwt_service_1.AuthJwtService,
            auth_validator_service_1.AuthValidator,
            user_validator_service_1.UserValidator,
        ],
        exports: [user_repository_1.UserRepository],
    })
], UserModule);
//# sourceMappingURL=user.module.js.map