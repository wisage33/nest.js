export class UserCreateDto {
  constructor(
    readonly login: string,
    readonly password: string,
  ) {}
}
