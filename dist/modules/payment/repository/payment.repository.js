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
exports.PaymentRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../core/prisma/prisma.service");
let PaymentRepository = class PaymentRepository {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(replishDto) {
        const { amount, userId } = replishDto;
        return this.prismaService.transaction.create({
            data: {
                amount,
                user: {
                    connect: { id: userId },
                },
            },
        });
    }
    async purchaseItem(purchaseItemDto) {
        const { itemId, userId, quantity } = purchaseItemDto;
        const purchaseTransaction = this.prismaService.$transaction(async (tx) => {
            const quantity = purchaseItemDto.quantity;
            const item = await tx.item.findUnique({
                where: { id: itemId },
                include: { shop: true },
            });
            if (!item) {
                throw new common_1.NotFoundException('Item not found');
            }
            if (item.quantity < quantity) {
                throw new common_1.BadRequestException('Quantity items goods is less than requested');
            }
            const user = await tx.user.findUnique({
                where: { id: userId },
            });
            if (!user) {
                throw new common_1.NotFoundException('User not found');
            }
            const purchaseAmount = item.price * quantity;
            if (user.balance != null && user.balance < purchaseAmount) {
                throw new common_1.BadRequestException('Not enough funds');
            }
            const purchase = await tx.transaction.create({
                data: {
                    user: {
                        connect: { id: userId },
                    },
                    item: {
                        connect: { id: itemId },
                    },
                    amount: purchaseAmount,
                    Delivery: {
                        create: {
                            status: 'pending',
                        },
                    },
                },
            });
            await tx.user.update({
                where: { id: userId },
                data: {
                    balance: { decrement: purchaseAmount },
                },
            });
            await tx.item.update({
                where: {
                    id: itemId,
                },
                data: {
                    quantity: { decrement: quantity },
                },
            });
            return purchase;
        });
        return purchaseTransaction;
    }
    async findAllTransactionsByUser(userId) {
        return this.prismaService.transaction.findMany({
            where: {
                userId,
            },
            orderBy: {
                createdAt: 'desc',
            },
            include: {
                item: true,
            },
        });
    }
};
exports.PaymentRepository = PaymentRepository;
exports.PaymentRepository = PaymentRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PaymentRepository);
//# sourceMappingURL=payment.repository.js.map