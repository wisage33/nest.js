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
exports.UserService = void 0;
const bcrypt = require("bcrypt");
const user_repository_1 = require("./repository/user.repository");
const common_1 = require("@nestjs/common");
const user_validator_service_1 = require("./validator/user-validator.service");
let UserService = class UserService {
    userRepository;
    userValidator;
    constructor(userRepository, userValidator) {
        this.userRepository = userRepository;
        this.userValidator = userValidator;
    }
    async userCreate(userCreateDto) {
        const { login, password } = userCreateDto;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await this.userRepository.create({
            login,
            password: hashedPassword,
        });
        const isUnique = await this.userValidator.checkUnique(user);
        console.log(isUnique);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        user_validator_service_1.UserValidator])
], UserService);
//# sourceMappingURL=user.service.js.map