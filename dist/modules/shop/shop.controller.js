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
exports.ShopController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const shop_repostory_1 = require("./repository/shop.repostory");
const auth_guard_1 = require("../auth/guard/auth.guard");
const swagger_1 = require("@nestjs/swagger");
let ShopController = class ShopController {
    shopRepository;
    constructor(shopRepository) {
        this.shopRepository = shopRepository;
    }
    async createShop(req, shopDto) {
        console.log(shopDto);
        const userId = req.user?.id;
        return this.shopRepository.create(userId, shopDto.name);
    }
    async deleteShop(id) {
        return this.shopRepository.delete(id);
    }
};
exports.ShopController = ShopController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a shop for user' }),
    (0, swagger_1.ApiBody)({
        schema: {
            example: {
                name: '',
            },
        },
    }),
    (0, common_1.Post)('create'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ShopController.prototype, "createShop", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ShopController.prototype, "deleteShop", null);
exports.ShopController = ShopController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Controller)('shop'),
    __metadata("design:paramtypes", [shop_repostory_1.ShopRepository])
], ShopController);
//# sourceMappingURL=shop.controller.js.map