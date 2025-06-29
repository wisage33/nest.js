import { CanActivate, ExecutionContext } from '@nestjs/common';
import { ShopRepository } from 'src/modules/shop/repository/shop.repostory';
export declare class ShopOwnerGuard implements CanActivate {
    private readonly shopRepository;
    constructor(shopRepository: ShopRepository);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
