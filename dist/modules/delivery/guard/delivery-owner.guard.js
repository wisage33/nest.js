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
exports.DeliveryOwnerGuard = void 0;
const common_1 = require("@nestjs/common");
const delivery_repository_1 = require("../repository/delivery.repository");
let DeliveryOwnerGuard = class DeliveryOwnerGuard {
    deliveryRepository;
    constructor(deliveryRepository) {
        this.deliveryRepository = deliveryRepository;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const userId = request.user.id;
        const deliveryId = Number(request.params.deliveryId);
        const delivery = await this.deliveryRepository.getDelivery({
            id: deliveryId,
        });
        if (!delivery) {
            throw new common_1.NotFoundException('Order not found');
        }
        if (delivery.purchase.userId !== userId) {
            throw new common_1.ForbiddenException("Order doesn't belong to user");
        }
        return true;
    }
};
exports.DeliveryOwnerGuard = DeliveryOwnerGuard;
exports.DeliveryOwnerGuard = DeliveryOwnerGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [delivery_repository_1.DeliveryRepository])
], DeliveryOwnerGuard);
//# sourceMappingURL=delivery-owner.guard.js.map