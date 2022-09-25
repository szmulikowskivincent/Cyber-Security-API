
import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { projectController } from './project.controller';

@Module({
  imports: [ProjectHttpModule],
  providers: [ProjectService],
  controllers: [projectController],
})
export class ProjectHttpModule {}
