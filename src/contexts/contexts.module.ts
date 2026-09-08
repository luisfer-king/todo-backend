import { Module } from '@nestjs/common';
import { IdentityAccessModule } from './identity-access/identity-access.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TasksModule, IdentityAccessModule],
  providers: []
})
export class ContextsModule {}
