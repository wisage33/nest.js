export declare enum enumStatus {
    onWay = "onWay",
    delivered = "delivered"
}
export declare class UpdateStatusDto {
    readonly status: enumStatus.onWay;
    readonly id?: number | undefined;
    constructor(status: enumStatus.onWay, id?: number | undefined);
}
