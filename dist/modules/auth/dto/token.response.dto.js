"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenResponseDTO = void 0;
const openapi = require("@nestjs/swagger");
class TokenResponseDTO {
    access_token;
    refresh_token;
    static _OPENAPI_METADATA_FACTORY() {
        return { access_token: { required: true, type: () => String }, refresh_token: { required: true, type: () => String } };
    }
}
exports.TokenResponseDTO = TokenResponseDTO;
//# sourceMappingURL=token.response.dto.js.map