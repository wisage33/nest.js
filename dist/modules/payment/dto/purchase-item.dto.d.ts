export declare class PurchaseItemDto {
    readonly quantity: number;
    readonly itemId?: number | undefined;
    readonly userId?: number | undefined;
    constructor(quantity: number, itemId?: number | undefined, userId?: number | undefined);
}
