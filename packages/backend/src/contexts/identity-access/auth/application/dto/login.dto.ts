import { IsEmail, IsString, IsNotEmpty } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
    @ApiProperty({
        description: 'Email del usuario',
        example: 'usuario@ejemplo.com',
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        description: 'Contraseña del usuario',
        example: 'MiPassword123',
        minLength: 6,
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;
}
