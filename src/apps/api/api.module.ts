import { Module } from '@nestjs/common';
import { AuthModule } from '../../contexts/identity-access/auth/auth.module';
import { UserModule } from '../../contexts/identity-access/user/user.module';
import { TodoModule } from '../../contexts/tasks/todo/todo.module';
import { AuthController } from './auth.controller';
import { TodoController } from './todo.controller';
import { UserController } from './user.controller';

@Module({
    imports: [TodoModule, UserModule, AuthModule],
    controllers: [TodoController, UserController, AuthController],
    providers: [],
})
export class ApiModule {}
