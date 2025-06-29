import { PaymentRepository } from "./repository/payment.repository";
import { ReplishDto } from "./dto/replish.dto";
import { UserRepository } from "../user/repository/user.repository";
import { PurchaseItemDto } from "./dto/purchase-item.dto";
export declare class PaymentService {
    private readonly PaymentRepository;
    private readonly UserRepositoru;
    constructor(PaymentRepository: PaymentRepository, UserRepositoru: UserRepository);
    replish(replishDto: ReplishDto): Promise<{
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
    purchaseItem(purchaseItemDto: PurchaseItemDto): Promise<{
        id: number;
        userId: number;
        amount: number;
        itemId: number | null;
        createdAt: Date;
    }>;
    userHistory(userId: number): Promise<({
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
