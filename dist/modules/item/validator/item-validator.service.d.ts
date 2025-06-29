import { ItemRepository } from '../repository/item.repository';
export declare class ItemValidator {
    private readonly itemRepository;
    constructor(itemRepository: ItemRepository);
    shopOwner(shopId: number, userId: number): Promise<{
        id: number;
    }>;
}
