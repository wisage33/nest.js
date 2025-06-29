import { UserRepository } from 'src/modules/user/repository/user.repository';
export declare class DeliveryValidator {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    isOwner(userId: number): Promise<({
        shops: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            userId: number;
        }[];
    } & {
        id: number;
        email: string | null;
        login: string | null;
        hashedPassword: string;
        balance: number;
        refreshToken: string | null;
        createdAt: Date;
        updatedAt: Date;
    }) | null>;
}
