import { PaymentRepository } from './repository/payment.repository';
import { ReplishDto } from './dto/replish.dto';
import { UserRepository } from '../user/repository/user.repository';
import { PurchaseItemDto } from './dto/purchase-item.dto';
export declare class PaymentService {
    private readonly PaymentRepository;
    private readonly UserRepositoru;
    constructor(PaymentRepository: PaymentRepository, UserRepositoru: UserRepository);
    replish(replishDto: ReplishDto): Promise<{
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
    purchaseItem(purchaseItemDto: PurchaseItemDto): Promise<{
        id: number;
        createdAt: Date;
        userId: number;
        amount: number;
        itemId: number | null;
    }>;
    userHistory(userId: number): Promise<({
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
