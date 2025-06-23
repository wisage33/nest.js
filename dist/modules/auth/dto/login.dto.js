"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginDto = void 0;
const openapi = require("@nestjs/swagger");
class LoginDto {
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
exports.LoginDto = LoginDto;
//# sourceMappingURL=login.dto.js.map