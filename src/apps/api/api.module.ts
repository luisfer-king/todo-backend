import { Module } from '@nestjs/common';
import { UserModule } from '../../contexts/identity-access/user/user.module';
import { TodoModule } from '../../contexts/tasks/todo/todo.module';
import { TodoController } from './todo.controller';
import { UserController } from './user.controller';

@Module({
    imports: [TodoModule, UserModule],
    controllers: [TodoController, UserController],
    providers: [],
})
export class ApiModule {}
