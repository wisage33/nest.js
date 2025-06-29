import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { ShopRepository } from 'src/modules/shop/repository/shop.repostory';

@Injectable()
export class ShopOwnerGuard implements CanActivate {
  constructor(private readonly shopRepository: ShopRepository) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const deliveryId = Number(request.params.deliveryId);
    const userId = request.user.id;
    const user = await this.shopRepository.find(userId);
    if(user && user.userId !== userId) {
        throw new ForbiddenException("User doesn't owner")
    }
    return true;
  }
}
