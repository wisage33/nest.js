import { itemCreateDto } from "./dto/item-create.dto";
import { ItemService } from "./item.service";
import { ItemUpdateDto } from "./dto/item-update.dto";
export declare class ItemController {
    private readonly itemService;
    constructor(itemService: ItemService);
    create(req: any, shopId: number, itemCreateDto: itemCreateDto): Promise<{
        id: number;
        name: string;
        quantity: number;
        price: number;
        shopId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getItems(shopId: number): Promise<{
        id: number;
        name: string;
        quantity: number;
        price: number;
        shopId: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    updateItem(shopId: number, id: number, itemUpdateDto: ItemUpdateDto): Promise<{
        id: number;
        name: string;
        quantity: number;
        price: number;
        shopId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteItem(shopId: number, id: number): Promise<{
        id: number;
        name: string;
        quantity: number;
        price: number;
        shopId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
