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
exports.ItemService = void 0;
const common_1 = require("@nestjs/common");
const item_repository_1 = require("./repository/item.repository");
const item_validator_service_1 = require("./validator/item-validator.service");
let ItemService = class ItemService {
    itemRepository;
    itemValidator;
    constructor(itemRepository, itemValidator) {
        this.itemRepository = itemRepository;
        this.itemValidator = itemValidator;
    }
    async createItem(itemCreateDto, shopId, userId) {
        await this.itemValidator.shopOwner(shopId, userId);
        const item = await this.itemRepository.createItem(itemCreateDto, shopId);
        return item;
    }
    async getAllItems(shopId) {
        const items = await this.itemRepository.getAllItems(shopId);
        return items;
    }
    async updateItem(dataUpdateDto) {
        const { id, shopId, ...data } = dataUpdateDto;
        return this.itemRepository.update({
            id,
            shopId,
        }, data);
    }
    async deleteItem(itemDeleteDto) {
        return this.itemRepository.delete(itemDeleteDto);
    }
};
exports.ItemService = ItemService;
exports.ItemService = ItemService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [item_repository_1.ItemRepository,
        item_validator_service_1.ItemValidator])
], ItemService);
//# sourceMappingURL=item.service.js.map