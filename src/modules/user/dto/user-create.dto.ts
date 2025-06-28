export class UserCreateDto {
  constructor(
    readonly email: string,
    readonly password: string,
    readonly login?: string,
  ) {}
}
