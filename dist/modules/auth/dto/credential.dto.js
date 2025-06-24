"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CredentialsDto = void 0;
const openapi = require("@nestjs/swagger");
class CredentialsDto {
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
exports.CredentialsDto = CredentialsDto;
//# sourceMappingURL=credential.dto.js.map