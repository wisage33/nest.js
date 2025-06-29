import { ReplishDto } from './dto/replish.dto';
import { PaymentService } from './payment.service';
import { PurchaseItemDto } from './dto/purchase-item.dto';
export declare class PaymentController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    replishBalance(req: any, replishDto: ReplishDto): Promise<{
        operation: {
            id: number;
            createdAt: Date;
            userId: number;
            amount: number;
            itemId: number | null;
        };
        updatedBalance: {
            id: number;
            email: string | null;
            login: string | null;
            hashedPassword: string;
            balance: number;
            refreshToken: string | null;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    buyItem(req: any, itemId: number, purchaseItemDto: PurchaseItemDto): Promise<{
        id: number;
        createdAt: Date;
        userId: number;
        amount: number;
        itemId: number | null;
    }>;
    userHistory(req: any): Promise<({
        item: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            price: number;
            quantity: number;
            shopId: number;
        } | null;
    } & {
        id: number;
        createdAt: Date;
        userId: number;
        amount: number;
        itemId: number | null;
    })[]>;
}
