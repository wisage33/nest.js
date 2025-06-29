import { ItemRepository } from './repository/item.repository';
import { itemCreateDto } from './dto/item-create.dto';
import { ItemValidator } from './validator/item-validator.service';
import { dataUpdateDto } from './dto/data-update.dto';
import { itemDeleteDto } from './dto/item-delete.dto';
export declare class ItemService {
    private readonly itemRepository;
    private readonly itemValidator;
    constructor(itemRepository: ItemRepository, itemValidator: ItemValidator);
    createItem(itemCreateDto: itemCreateDto, shopId: number, userId: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        price: number;
        quantity: number;
        shopId: number;
    }>;
    getAllItems(shopId: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        price: number;
        quantity: number;
        shopId: number;
    }[]>;
    updateItem(dataUpdateDto: dataUpdateDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        price: number;
        quantity: number;
        shopId: number;
    }>;
    deleteItem(itemDeleteDto: itemDeleteDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        price: number;
        quantity: number;
        shopId: number;
    }>;
}
