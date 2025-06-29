import { ShopRepository } from "./repository/shop.repostory";
export declare class ShopController {
    private readonly shopRepository;
    constructor(shopRepository: ShopRepository);
    createShop(req: any, shopDto: any): Promise<{
        id: number;
        name: string;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteShop(id: number): Promise<{
        id: number;
        name: string;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
