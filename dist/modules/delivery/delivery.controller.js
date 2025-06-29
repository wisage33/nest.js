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
exports.DeliveryController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/guard/auth.guard");
const swagger_1 = require("@nestjs/swagger");
const delivery_service_1 = require("./delivery.service");
const delivery_owner_guard_1 = require("./guard/delivery-owner.guard");
const update_status_dto_1 = require("./dto/update-status.dto");
const shop_owner_guard_1 = require("./guard/shop-owner.guard");
let DeliveryController = class DeliveryController {
    deliveryService;
    constructor(deliveryService) {
        this.deliveryService = deliveryService;
    }
    async status(deliveryId, req) {
        const userId = req.user.id;
        return this.deliveryService.getStatus({ id: deliveryId });
    }
    async updateStatus(id, updateStatusDto) {
        const status = updateStatusDto.status;
        return this.deliveryService.updateStatus({ id, status });
    }
};
exports.DeliveryController = DeliveryController;
__decorate([
    (0, common_1.UseGuards)(delivery_owner_guard_1.DeliveryOwnerGuard),
    (0, common_1.Get)(':deliveryId/status'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('deliveryId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], DeliveryController.prototype, "status", null);
__decorate([
    (0, common_1.Patch)(':deliveryId/status'),
    (0, common_1.UseGuards)(shop_owner_guard_1.ShopOwnerGuard),
    (0, swagger_1.ApiProperty)({
        enum: update_status_dto_1.enumStatus,
        example: update_status_dto_1.enumStatus.onWay,
    }),
    (0, swagger_1.ApiBody)({
        enum: update_status_dto_1.enumStatus,
        examples: {
            example1: {
                value: { status: update_status_dto_1.enumStatus.onWay },
            },
        },
    }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('deliveryId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_status_dto_1.UpdateStatusDto]),
    __metadata("design:returntype", Promise)
], DeliveryController.prototype, "updateStatus", null);
exports.DeliveryController = DeliveryController = __decorate([
    (0, common_1.Controller)('delivery'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [delivery_service_1.DeliveryService])
], DeliveryController);
//# sourceMappingURL=delivery.controller.js.map