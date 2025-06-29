export enum enumStatus {
  onWay = 'onWay',
  delivered = 'delivered',
}

export class UpdateStatusDto {
  constructor(
    readonly status: enumStatus.onWay,
    readonly id?: number,
  ) {}
}
