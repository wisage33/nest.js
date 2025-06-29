import { ItemRepository } from "./repository/item.repository";
import { itemCreateDto } from "./dto/item-create.dto";
import { ItemValidator } from "./validator/item-validator.service";
import { dataUpdateDto } from "./dto/data-update.dto";
import { itemDeleteDto } from "./dto/item-delete.dto";
export declare class ItemService {
    private readonly itemRepository;
    private readonly itemValidator;
    constructor(itemRepository: ItemRepository, itemValidator: ItemValidator);
    createItem(itemCreateDto: itemCreateDto, shopId: number, userId: number): Promise<{
        id: number;
        name: string;
        quantity: number;
        price: number;
        shopId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getAllItems(shopId: number): Promise<{
        id: number;
        name: string;
        quantity: number;
        price: number;
        shopId: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    updateItem(dataUpdateDto: dataUpdateDto): Promise<{
        id: number;
        name: string;
        quantity: number;
        price: number;
        shopId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteItem(itemDeleteDto: itemDeleteDto): Promise<{
        id: number;
        name: string;
        quantity: number;
        price: number;
        shopId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
