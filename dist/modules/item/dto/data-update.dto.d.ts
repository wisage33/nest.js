export declare class dataUpdateDto {
    readonly id: number;
    readonly shopId: number;
    readonly name?: string | undefined;
    readonly price?: number | undefined;
    readonly quantity?: number | undefined;
    constructor(id: number, shopId: number, name?: string | undefined, price?: number | undefined, quantity?: number | undefined);
}
