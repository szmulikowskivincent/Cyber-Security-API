import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
  } from '@nestjs/common';
  import { DeleteResult, UpdateResult } from 'typeorm';
  import { Project } from './project.entity';
  import { ProjectService } from './project.service';
  
  @Controller('project')
  export class projectController {
    ProjectService: any;
    constructor(private projectService: ProjectService) {}
  
    @Post()
    async create(@Body() project: Project): Promise<Project> {
      return await this.projectService.createProject(project);
    }
  
    @Delete(':id')
    async deleteProject(@Param('id') id: number): Promise<DeleteResult> {
      return await this.projectService.deleteproject(id);
    }
  
    @Get()
    async findAll(): Promise<Project[]> {
      return await this.projectService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Project> {
      return await this.ProjectService.findOne(id);
    }
  }
  