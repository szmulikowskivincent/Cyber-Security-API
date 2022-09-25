import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Task } from './task.entity';


@Injectable()
export class TaskService {
  findOne(id: number): Task | PromiseLike<Task> {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}
 
  async createtask(task: Task): Promise<Task> {
    return await this.taskRepository.save(task) ;
  
  }

  async updateTask(id: number, task: Task): Promise<UpdateResult> {
    return await (this.taskRepository.update(id, task));
  }

  async deletetask(id: number): Promise<DeleteResult> {
    return await  (this.taskRepository.delete(id));
  }

  async findAll(): Promise<Task[]> {
    return await (this.taskRepository.find());
  }

   async remove(id: string): Promise<void> {
    await this.taskRepository.delete(id);
   }
  }

