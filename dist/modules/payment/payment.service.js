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
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const payment_repository_1 = require("./repository/payment.repository");
const user_repository_1 = require("../user/repository/user.repository");
let PaymentService = class PaymentService {
    PaymentRepository;
    UserRepositoru;
    constructor(PaymentRepository, UserRepositoru) {
        this.PaymentRepository = PaymentRepository;
        this.UserRepositoru = UserRepositoru;
    }
    async replish(replishDto) {
        const operation = await this.PaymentRepository.create({ ...replishDto });
        const updatedBalance = await this.UserRepositoru.update({ id: replishDto.userId }, { balance: {
                increment: replishDto.amount
            } });
        return { operation, updatedBalance };
    }
    async purchaseItem(purchaseItemDto) {
        return this.PaymentRepository.purchaseItem(purchaseItemDto);
    }
    async userHistory(userId) {
        return this.PaymentRepository.findAllTransactionsByUser(userId);
    }
};
exports.PaymentService = PaymentService;
exports.PaymentService = PaymentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [payment_repository_1.PaymentRepository,
        user_repository_1.UserRepository])
], PaymentService);
//# sourceMappingURL=payment.service.js.map