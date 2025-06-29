import { CanActivate, ExecutionContext } from '@nestjs/common';
import { DeliveryRepository } from '../repository/delivery.repository';
export declare class DeliveryOwnerGuard implements CanActivate {
    private readonly deliveryRepository;
    constructor(deliveryRepository: DeliveryRepository);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
