import { itemCreateDto } from './dto/item-create.dto';
import { ItemService } from './item.service';
import { ItemUpdateDto } from './dto/item-update.dto';
export declare class ItemController {
    private readonly itemService;
    constructor(itemService: ItemService);
    create(req: any, shopId: number, itemCreateDto: itemCreateDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        price: number;
        quantity: number;
        shopId: number;
    }>;
    getItems(shopId: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        price: number;
        quantity: number;
        shopId: number;
    }[]>;
    updateItem(shopId: number, id: number, itemUpdateDto: ItemUpdateDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        price: number;
        quantity: number;
        shopId: number;
    }>;
    deleteItem(shopId: number, id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        price: number;
        quantity: number;
        shopId: number;
    }>;
}
