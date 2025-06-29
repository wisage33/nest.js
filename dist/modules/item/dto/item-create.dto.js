"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemCreateDto = void 0;
const openapi = require("@nestjs/swagger");
class itemCreateDto {
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
exports.itemCreateDto = itemCreateDto;
//# sourceMappingURL=item-create.dto.js.map