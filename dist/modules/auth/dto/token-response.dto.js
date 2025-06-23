"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenResponseDTO = void 0;
const openapi = require("@nestjs/swagger");
class TokenResponseDTO {
    access_token;
    refresh_token;
    constructor(access_token, refresh_token) {
        this.access_token = access_token;
        this.refresh_token = refresh_token;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.TokenResponseDTO = TokenResponseDTO;
//# sourceMappingURL=token-response.dto.js.map