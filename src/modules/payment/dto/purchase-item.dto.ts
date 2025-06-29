export class PurchaseItemDto {
    constructor(
        readonly quantity: number,
        readonly itemId?: number,
        readonly userId?: number
    ) {}
}