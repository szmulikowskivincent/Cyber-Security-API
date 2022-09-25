import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectService } from './project.service';
import { projectController } from './Project.controller';
import { Project } from './project.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  exports: [TypeOrmModule, ProjectService],
  providers: [ProjectService],
  controllers: [projectController],
})
export class ProjectModule {}
