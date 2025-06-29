import { ReplishDto } from "./dto/replish.dto";
import { PaymentService } from "./payment.service";
import { PurchaseItemDto } from "./dto/purchase-item.dto";
export declare class PaymentController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    replishBalance(req: any, replishDto: ReplishDto): Promise<{
        operation: {
            id: number;
            userId: number;
            amount: number;
            itemId: number | null;
            createdAt: Date;
        };
        updatedBalance: {
            id: number;
            createdAt: Date;
            email: string | null;
            login: string | null;
            hashedPassword: string;
            balance: number;
            refreshToken: string | null;
            updatedAt: Date;
        };
    }>;
    buyItem(req: any, itemId: number, purchaseItemDto: PurchaseItemDto): Promise<{
        id: number;
        userId: number;
        amount: number;
        itemId: number | null;
        createdAt: Date;
    }>;
    userHistory(req: any): Promise<({
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
