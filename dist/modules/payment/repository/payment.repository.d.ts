import { PrismaService } from "src/core/prisma/prisma.service";
import { ReplishDto } from "../dto/replish.dto";
import { PurchaseItemDto } from "../dto/purchase-item.dto";
export declare class PaymentRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(replishDto: ReplishDto): Promise<{
        id: number;
        userId: number;
        amount: number;
        itemId: number | null;
        createdAt: Date;
    }>;
    purchaseItem(purchaseItemDto: PurchaseItemDto): Promise<{
        id: number;
        userId: number;
        amount: number;
        itemId: number | null;
        createdAt: Date;
    }>;
    findAllTransactionsByUser(userId: number): Promise<({
        item: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            quantity: number;
            price: number;
            shopId: number;
        } | null;
    } & {
        id: number;
        userId: number;
        amount: number;
        itemId: number | null;
        createdAt: Date;
    })[]>;
}
