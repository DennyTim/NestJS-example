import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from 'src/auth/auth.module';

import { TasksService } from './tasks.service';
import { TaskRepository } from './task.repository';
import { TasksController } from './tasks.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TaskRepository]), AuthModule],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
