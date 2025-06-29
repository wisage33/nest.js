"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemValidator = void 0;
const common_1 = require("@nestjs/common");
const item_repository_1 = require("../repository/item.repository");
let ItemValidator = class ItemValidator {
    itemRepository;
    constructor(itemRepository) {
        this.itemRepository = itemRepository;
    }
    async shopOwner(shopId, userId) {
        const shop = await this.itemRepository.findShop(shopId, userId);
        if (!shop) {
            throw new common_1.ForbiddenException("You not owner");
        }
        return shop;
    }
};
exports.ItemValidator = ItemValidator;
exports.ItemValidator = ItemValidator = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [item_repository_1.ItemRepository])
], ItemValidator);
//# sourceMappingURL=item-validator.service.js.map