"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payload = void 0;
const openapi = require("@nestjs/swagger");
class Payload {
    sub;
    constructor(sub) {
        this.sub = sub;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.Payload = Payload;
//# sourceMappingURL=payload.dto.js.map