import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    name: string | null;

    @IsString()
    @MinLength(6)
    @IsNotEmpty()
    password: string;
}