export class TokenResponseDTO {
  constructor(
    readonly access_token: string,
    readonly refresh_token: string,
  ) {}
}
