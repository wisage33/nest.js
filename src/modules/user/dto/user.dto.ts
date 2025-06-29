export class UserDto {
  constructor(
    readonly email: string,
    readonly login?: string,
  ) {}
}
