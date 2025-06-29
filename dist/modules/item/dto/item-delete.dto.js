"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemDeleteDto = void 0;
const openapi = require("@nestjs/swagger");
class itemDeleteDto {
    id;
    shopId;
    constructor(id, shopId) {
        this.id = id;
        this.shopId = shopId;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.itemDeleteDto = itemDeleteDto;
//# sourceMappingURL=item-delete.dto.js.map