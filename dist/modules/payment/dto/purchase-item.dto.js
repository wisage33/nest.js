"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseItemDto = void 0;
const openapi = require("@nestjs/swagger");
class PurchaseItemDto {
    quantity;
    itemId;
    userId;
    constructor(quantity, itemId, userId) {
        this.quantity = quantity;
        this.itemId = itemId;
        this.userId = userId;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.PurchaseItemDto = PurchaseItemDto;
//# sourceMappingURL=purchase-item.dto.js.map