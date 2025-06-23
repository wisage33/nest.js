"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDto = void 0;
const openapi = require("@nestjs/swagger");
class userDto {
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
exports.userDto = userDto;
//# sourceMappingURL=user.dto.js.map