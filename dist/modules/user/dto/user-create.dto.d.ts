export declare class UserCreateDto {
    readonly email: string;
    readonly password: string;
    readonly login?: string | undefined;
    constructor(email: string, password: string, login?: string | undefined);
}
