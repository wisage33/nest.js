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
exports.PaymentController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const replish_dto_1 = require("./dto/replish.dto");
const payment_service_1 = require("./payment.service");
const auth_guard_1 = require("../auth/guard/auth.guard");
const swagger_1 = require("@nestjs/swagger");
const purchase_item_dto_1 = require("./dto/purchase-item.dto");
let PaymentController = class PaymentController {
    paymentService;
    constructor(paymentService) {
        this.paymentService = paymentService;
    }
    async replishBalance(req, replishDto) {
        const userId = req.user.id;
        return this.paymentService.replish({ ...replishDto, userId });
    }
    async buyItem(req, itemId, purchaseItemDto) {
        const userId = req.user.id;
        const quantity = purchaseItemDto.quantity;
        return await this.paymentService.purchaseItem({ itemId, quantity, userId });
    }
    async userHistory(req) {
        const id = req.user.id;
        return this.paymentService.userHistory(id);
    }
};
exports.PaymentController = PaymentController;
__decorate([
    (0, common_1.Post)('replish'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, replish_dto_1.ReplishDto]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "replishBalance", null);
__decorate([
    (0, common_1.Post)(':itemId'),
    (0, swagger_1.ApiOperation)({ summary: 'Purchase item' }),
    (0, swagger_1.ApiBody)({
        schema: {
            example: {
                quantity: 0,
            },
        },
    }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('itemId', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, purchase_item_dto_1.PurchaseItemDto]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "buyItem", null);
__decorate([
    (0, common_1.Get)('history'),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "userHistory", null);
exports.PaymentController = PaymentController = __decorate([
    (0, common_1.Controller)('payments'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [payment_service_1.PaymentService])
], PaymentController);
//# sourceMappingURL=payment.controller.js.map