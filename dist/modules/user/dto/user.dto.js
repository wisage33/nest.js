"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDto = void 0;
const openapi = require("@nestjs/swagger");
class UserDto {
    email;
    login;
    constructor(email, login) {
        this.email = email;
        this.login = login;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UserDto = UserDto;
//# sourceMappingURL=user.dto.js.map