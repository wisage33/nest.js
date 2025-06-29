import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { DeliveryValidator } from '../validator/delivery-validator.service';
export declare class DeliveryRepository {
    private readonly prismaService;
    private readonly deliveryValidator;
    constructor(prismaService: PrismaService, deliveryValidator: DeliveryValidator);
    getDelivery(where: Prisma.DeliveryWhereUniqueInput): Promise<({
        purchase: {
            id: number;
            createdAt: Date;
            userId: number;
            amount: number;
            itemId: number | null;
        };
    } & {
        id: number;
        purchaseId: number;
        status: import(".prisma/client").$Enums.deliveryStatus;
        createdAt: Date;
        updatedAt: Date;
    }) | null>;
    changeStatus(where: Prisma.DeliveryWhereUniqueInput, data: Prisma.DeliveryUpdateInput): Promise<{
        id: number;
        purchaseId: number;
        status: import(".prisma/client").$Enums.deliveryStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
