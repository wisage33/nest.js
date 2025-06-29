export class dataUpdateDto {
    constructor(
        readonly id: number,
        readonly shopId: number,
        readonly name?: string,
        readonly price?: number,
        readonly quantity?: number
    ) {}
}