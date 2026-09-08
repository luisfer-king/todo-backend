import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppsModule } from './apps/apps.module';
import { ContextsModule } from './contexts/contexts.module';
import { PrismaModule } from './shared/infrastructure/prisma/prisma.module';
import { PrismaService } from './shared/infrastructure/prisma/prisma.service';
import { ApiController } from './src/apps/api/api.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    ContextsModule,
    AppsModule,
  ],
  controllers: [AppController, ApiController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
