"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataUpdateDto = void 0;
const openapi = require("@nestjs/swagger");
class dataUpdateDto {
    id;
    shopId;
    name;
    price;
    quantity;
    constructor(id, shopId, name, price, quantity) {
        this.id = id;
        this.shopId = shopId;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.dataUpdateDto = dataUpdateDto;
//# sourceMappingURL=data-update.dto.js.map