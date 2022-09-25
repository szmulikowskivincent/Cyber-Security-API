import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
  } from '@nestjs/common';
  import { Observable } from 'rxjs';
  import { DeleteResult, UpdateResult } from 'typeorm';
  import { Task } from './task.entity';
  import { TaskService } from './task.service';
  
  @Controller('task')
  export class TaskController {
    TaskService: any;
    constructor(private taskService: TaskService) {}
  
    @Post()
    async create(@Body() task: Task): Promise<Task> {
      return await this.taskService.createtask(task);
    }
  
    @Delete(':id')
    async deleteTask(@Param('id') id: number): Promise<DeleteResult> {
      return await this.taskService.deletetask(id);
    }
  
    @Get()
    async findAll(): Promise<Task[]> {
      return await this.taskService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Task> {
      return await this.taskService.findOne(id);
    }
  }