"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDto = void 0;
const openapi = require("@nestjs/swagger");
class UserDto {
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
exports.UserDto = UserDto;
//# sourceMappingURL=user.dto.js.map