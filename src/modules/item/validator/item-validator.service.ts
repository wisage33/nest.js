import { ForbiddenException, Injectable } from '@nestjs/common';
import { ItemRepository } from '../repository/item.repository';

@Injectable()
export class ItemValidator {
  constructor(private readonly itemRepository: ItemRepository) {}

  async shopOwner(shopId: number, userId: number) {
    const shop = await this.itemRepository.findShop(shopId, userId);
    if (!shop) {
      throw new ForbiddenException('You not owner');
    }
    return shop;
  }
}
