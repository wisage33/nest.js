"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUpdateDto = void 0;
const openapi = require("@nestjs/swagger");
class ItemUpdateDto {
    name;
    quantity;
    price;
    constructor(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.ItemUpdateDto = ItemUpdateDto;
//# sourceMappingURL=item-update.dto.js.map