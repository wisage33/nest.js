import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DeliveryRepository } from '../repository/delivery.repository';

@Injectable()
export class DeliveryOwnerGuard implements CanActivate {
  constructor(private readonly deliveryRepository: DeliveryRepository) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const userId = request.user.id;
    const deliveryId = Number(request.params.deliveryId);
    const delivery = await this.deliveryRepository.getDelivery({
      id: deliveryId,
    });
    if (!delivery) {
      throw new NotFoundException('Order not found');
    }
    if (delivery.purchase.userId !== userId) {
      throw new ForbiddenException("Order doesn't belong to user");
    }
    return true;
  }
}
