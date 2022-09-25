import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Project } from './project.entity';


@Injectable()
export class ProjectService {
    [x: string]: any;
  findOne(id: any) {
    throw new Error('Method not implemented.');
  }
  async createProject(project: Project): Promise<Project> {
    return await this.projectRepository.save(project) ;
  }
  async deleteProject(id: number): Promise<DeleteResult> {
    return await this.projectService.deleteProject(id);
  }
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  async updateProject(id: number, project: Project): Promise<UpdateResult> {
    return await (this.projectRepository.update(id, project));
  }

  async deleteUser(id: number): Promise<DeleteResult> {
    return await  (this.projectRepository.delete(id));
  }

  async findAll(): Promise<Project[]> {
    return await (this.projectRepository.find());
  }

   async remove(id: number): Promise<void> {
    await this.projectRepository.delete(id);
  }
}

