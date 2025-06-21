import { ApiProperty } from "@nestjs/swagger"

export class DTOLogin {
    @ApiProperty()
    readonly login: string

    @ApiProperty()
    readonly password: string
}