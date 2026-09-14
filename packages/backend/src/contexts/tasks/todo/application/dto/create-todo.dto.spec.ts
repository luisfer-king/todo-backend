import { CreateTodoDto } from './create-todo.dto';

describe('Dto', () => {
  it('should be defined', () => {
    expect(new CreateTodoDto()).toBeDefined();
  });
});
