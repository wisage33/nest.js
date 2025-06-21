import { ApiProperty } from "@nestjs/swagger"

export class loginDto {
    @ApiProperty({
        minimum: 0,
        default: 0,
        example: "user",
        type: String
    })
    readonly login: string; 

    @ApiProperty({
        minimum: 0,
        default: 0,
        example: "12345",
        type: String
    })
    readonly password: string;
}