"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateDto = void 0;
const openapi = require("@nestjs/swagger");
class UserUpdateDto {
    login;
    password;
    refreshToken;
    constructor(login, password, refreshToken) {
        this.login = login;
        this.password = password;
        this.refreshToken = refreshToken;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UserUpdateDto = UserUpdateDto;
//# sourceMappingURL=user.update.dto.js.map