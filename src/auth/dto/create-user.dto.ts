import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {

    @ApiProperty({
        description: 'email usuario',
        nullable: false,
    })
    @IsString()
    @IsEmail()
    email: string;

    @ApiProperty({
        description: 'password user',
        nullable: false,
        minLength: 6,
        maxLength: 50
    })
    @IsString()
    @MinLength(6)
    @MaxLength(50)
    @Matches(
        /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'The password must have a Uppercase, lowercase letter and a number'
    })
    password: string;

    @ApiProperty({
        description: 'fullName user',
        nullable: false,
        minLength: 3
    })
    @IsString()
    @MinLength(3)
    fullName: string;

    @ApiProperty({
        description: 'cedula user',
        nullable: true,
        default: null
    })
    @IsString()
    @IsOptional()
    cedula?: string;
}