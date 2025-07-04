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
exports.ShopOwnerGuard = void 0;
const common_1 = require("@nestjs/common");
const shop_repostory_1 = require("../../shop/repository/shop.repostory");
let ShopOwnerGuard = class ShopOwnerGuard {
    shopRepository;
    constructor(shopRepository) {
        this.shopRepository = shopRepository;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const deliveryId = Number(request.params.deliveryId);
        const userId = request.user.id;
        const user = await this.shopRepository.find(userId);
        if (user && user.userId !== userId) {
            throw new common_1.ForbiddenException("User doesn't owner");
        }
        return true;
    }
};
exports.ShopOwnerGuard = ShopOwnerGuard;
exports.ShopOwnerGuard = ShopOwnerGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [shop_repostory_1.ShopRepository])
], ShopOwnerGuard);
//# sourceMappingURL=shop-owner.guard.js.map