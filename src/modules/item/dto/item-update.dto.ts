export class ItemUpdateDto {
  constructor(
    readonly name?: string,
    readonly quantity?: number,
    readonly price?: number,
  ) {}
}
