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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const item_create_dto_1 = require("./dto/item-create.dto");
const item_service_1 = require("./item.service");
const item_update_dto_1 = require("./dto/item-update.dto");
let ItemController = class ItemController {
    itemService;
    constructor(itemService) {
        this.itemService = itemService;
    }
    create(req, shopId, itemCreateDto) {
        const userId = req.userId;
        return this.itemService.createItem(itemCreateDto, shopId, userId);
    }
    async getItems(shopId) {
        return this.itemService.getAllItems(shopId);
    }
    async updateItem(shopId, id, itemUpdateDto) {
        return this.itemService.updateItem({ shopId, id, ...itemUpdateDto });
    }
    async deleteItem(shopId, id) {
        return this.itemService.deleteItem({ id, shopId });
    }
};
exports.ItemController = ItemController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: "Create items for shop" }),
    (0, swagger_1.ApiBody)({
        schema: {
            example: {
                name: 'bottle',
                quantity: 0,
                price: 0,
            }
        }
    }),
    (0, common_1.Post)(':shopId/items'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('shopId', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, item_create_dto_1.itemCreateDto]),
    __metadata("design:returntype", void 0)
], ItemController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':shopId'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('shopId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ItemController.prototype, "getItems", null);
__decorate([
    (0, common_1.Patch)(':shopId/items/:itemId'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('shopId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('itemId', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, item_update_dto_1.ItemUpdateDto]),
    __metadata("design:returntype", Promise)
], ItemController.prototype, "updateItem", null);
__decorate([
    (0, common_1.Delete)(':shopId/items/:itemId'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('shopId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('itemId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ItemController.prototype, "deleteItem", null);
exports.ItemController = ItemController = __decorate([
    (0, common_1.Controller)('shops'),
    __metadata("design:paramtypes", [item_service_1.ItemService])
], ItemController);
//# sourceMappingURL=item.controller.js.map