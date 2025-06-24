"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateDto = void 0;
const openapi = require("@nestjs/swagger");
class UserCreateDto {
    login;
    password;
    constructor(login, password) {
        this.login = login;
        this.password = password;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UserCreateDto = UserCreateDto;
//# sourceMappingURL=user-create.dto.js.map