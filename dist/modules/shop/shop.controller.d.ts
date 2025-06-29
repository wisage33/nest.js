import { ShopRepository } from "./repository/shop.repostory";
export declare class ShopController {
    private readonly shopRepository;
    constructor(shopRepository: ShopRepository);
    createShop(req: any, shopDto: any): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        userId: number;
    }>;
    deleteShop(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        userId: number;
    }>;
}
