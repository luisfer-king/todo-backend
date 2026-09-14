import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { UserRepository } from '../../user/domain/user.repository';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly jwtService: JwtService,
    ) {}

    async login(dto: LoginDto) {
        const user = await this.userRepository.findByEmail(dto.email);
        if(!user) {
            throw new UnauthorizedException('Credenciales Invalidas');
        }

        const valid = await argon2.verify(user.password, dto.password);
        if(!valid) {
            throw new UnauthorizedException('Credenciales Invalidas');
        }

        const payload = {
            sub: user.id,
            email: user.email,
            role: user.role,
        };

        return {
            accessToken: this.jwtService.sign(payload),
            user: {
                id: user.id,
                email: user.email,
                role: user.role,
            }
        };
    }
}
