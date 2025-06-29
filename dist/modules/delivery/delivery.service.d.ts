import { DeliveryRepository } from './repository/delivery.repository';
import { GetStatusDto } from './dto/get-status.dto';
import { DeliveryValidator } from './validator/delivery-validator.service';
import { UpdateStatusDto } from './dto/update-status.dto';
export declare class DeliveryService {
    private readonly deliveryRepository;
    private readonly deliveryValidator;
    constructor(deliveryRepository: DeliveryRepository, deliveryValidator: DeliveryValidator);
    getStatus(getStatusDto: GetStatusDto): Promise<({
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
    updateStatus(updateStatusDto: UpdateStatusDto): Promise<{
        id: number;
        purchaseId: number;
        status: import(".prisma/client").$Enums.deliveryStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
