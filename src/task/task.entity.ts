import { Project } from '../project/project.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/users/user.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  task_name: string;

  @Column()
  task_in_short: string;

  @Column()
  task_projects: string;

  @ManyToOne (() => Project, project => project.tasks)
  project: Project
  user: any;
}