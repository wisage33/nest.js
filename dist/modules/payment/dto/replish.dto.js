"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplishDto = void 0;
const openapi = require("@nestjs/swagger");
class ReplishDto {
    amount;
    userId;
    constructor(amount, userId) {
        this.amount = amount;
        this.userId = userId;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.ReplishDto = ReplishDto;
//# sourceMappingURL=replish.dto.js.map