"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const user_module_1 = require("./modules/user/user.module");
const time_module_1 = require("./modules/time/time.module");
const auth_module_1 = require("./modules/auth/auth.module");
const config_1 = require("@nestjs/config");
const shop_module_1 = require("./modules/shop/shop.module");
const core_module_1 = require("./core/core.module");
const item_module_1 = require("./modules/item/item.module");
const payment_module_1 = require("./modules/payment/payment.module");
const delivery_module_1 = require("./modules/delivery/delivery.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            delivery_module_1.DeliveryModule,
            payment_module_1.PaymentModule,
            item_module_1.ItemModule,
            shop_module_1.ShopModule,
            user_module_1.UserModule,
            time_module_1.TimeModule,
            auth_module_1.AuthModule,
            core_module_1.CoreModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: './env',
            }),
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map