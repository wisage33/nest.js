import { Injectable } from "@nestjs/common";
import { ItemRepository } from "./repository/item.repository";
import { itemCreateDto } from "./dto/item-create.dto";
import { ItemValidator } from "./validator/item-validator.service";
import { dataUpdateDto } from "./dto/data-update.dto";
import { itemDeleteDto } from "./dto/item-delete.dto";

@Injectable()
export class ItemService {
    constructor(
        private readonly itemRepository: ItemRepository,
        private readonly itemValidator: ItemValidator
    ) {}

    async createItem(
        itemCreateDto: itemCreateDto,
        shopId: number,
        userId: number
    ) {
        await this.itemValidator.shopOwner(shopId, userId)
        const item = await this.itemRepository.createItem(itemCreateDto, shopId)
        return item;
    }

    async getAllItems(shopId: number) {
        const items = await this.itemRepository.getAllItems(shopId);
        return items;
    }

    async updateItem(dataUpdateDto: dataUpdateDto) {
        const { id, shopId, ...data } = dataUpdateDto;
        return this.itemRepository.update({
            id,
            shopId
        }, data);
    }

    async deleteItem(itemDeleteDto: itemDeleteDto) {
        return this.itemRepository.delete(itemDeleteDto);
    }
}