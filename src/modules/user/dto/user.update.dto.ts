export class UserUpdateDto {
    constructor(
        readonly login?: string,
        readonly password?: string,
        readonly refreshToken?: string
    ) {}
}