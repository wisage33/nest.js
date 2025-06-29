"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("../auth/auth.module");
const prisma_module_1 = require("../../core/prisma/prisma.module");
const delivery_service_1 = require("./delivery.service");
const delivery_controller_1 = require("./delivery.controller");
const delivery_repository_1 = require("./repository/delivery.repository");
const delivery_validator_service_1 = require("./validator/delivery-validator.service");
const user_repository_1 = require("../user/repository/user.repository");
const delivery_owner_guard_1 = require("./guard/delivery-owner.guard");
const shop_owner_guard_1 = require("./guard/shop-owner.guard");
const shop_repostory_1 = require("../shop/repository/shop.repostory");
let DeliveryModule = class DeliveryModule {
};
exports.DeliveryModule = DeliveryModule;
exports.DeliveryModule = DeliveryModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, prisma_module_1.PrismaModule],
        providers: [
            delivery_service_1.DeliveryService,
            delivery_repository_1.DeliveryRepository,
            delivery_validator_service_1.DeliveryValidator,
            user_repository_1.UserRepository,
            delivery_owner_guard_1.DeliveryOwnerGuard,
            shop_owner_guard_1.ShopOwnerGuard,
            shop_repostory_1.ShopRepository
        ],
        controllers: [delivery_controller_1.DeliveryController],
    })
], DeliveryModule);
//# sourceMappingURL=delivery.module.js.map