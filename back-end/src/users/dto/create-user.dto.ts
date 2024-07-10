import { IsEmail } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"
export class CreateUsersDto {
     @IsEmail()
     @ApiProperty()
     email: string 
     @ApiProperty()
     password :string
     @ApiProperty()
     fullName? :string
     @ApiProperty()
     telephone?: string
     @ApiProperty()
    adress? :string
}



