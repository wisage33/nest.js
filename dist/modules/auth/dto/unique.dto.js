"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueDto = void 0;
const openapi = require("@nestjs/swagger");
class UniqueDto {
    id;
    login;
    constructor(id, login) {
        this.id = id;
        this.login = login;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UniqueDto = UniqueDto;
//# sourceMappingURL=unique.dto.js.map