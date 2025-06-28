"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateDto = void 0;
const openapi = require("@nestjs/swagger");
class UserCreateDto {
    email;
    password;
    login;
    constructor(email, password, login) {
        this.email = email;
        this.password = password;
        this.login = login;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UserCreateDto = UserCreateDto;
//# sourceMappingURL=user-create.dto.js.map