import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { CurrentUser } from '../../contexts/identity-access/auth/infrastructure/current-user.decorator';
import { JwtAuthGuard } from '../../contexts/identity-access/auth/infrastructure/jwt-auth.guard';
import { CreateTodoDto } from '../../contexts/tasks/todo/application/dto/create-todo.dto';
import { UpdateTodoDto } from '../../contexts/tasks/todo/application/dto/update-todo.dto';
import { TodoService } from '../../contexts/tasks/todo/application/todo.service';

@UseGuards(JwtAuthGuard)
@Controller('todo')
export class TodoController {
    constructor(
        private readonly todoService: TodoService
    ) {}

    @Get()
    findAll() {
        return this.todoService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: string) {
        return this.todoService.getOne(id);
    }

    @Post()
    create(
        @CurrentUser() user: { id: string },
        @Body() createTodoDto: CreateTodoDto
    ) {
        return this.todoService.create(user.id, createTodoDto);
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: string,
        @Body() updateTodoDto: UpdateTodoDto
    ) {
        return this.todoService.update(id, updateTodoDto);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: string) {
        return this.todoService.deleteItem(id);
    }
}
