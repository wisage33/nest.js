import { DeliveryService } from './delivery.service';
import { UpdateStatusDto } from './dto/update-status.dto';
export declare class DeliveryController {
    private readonly deliveryService;
    constructor(deliveryService: DeliveryService);
    status(deliveryId: number, req: any): Promise<({
        purchase: {
            id: number;
            userId: number;
            createdAt: Date;
            amount: number;
            itemId: number | null;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.deliveryStatus;
        purchaseId: number;
    }) | null>;
    updateStatus(id: number, updateStatusDto: UpdateStatusDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.deliveryStatus;
        purchaseId: number;
    }>;
}
