import { Task } from '../task/task.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany,} from 'typeorm';
import { User } from 'src/users/user.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  project_name: string;

  @Column()
  project_in_short: string;

  @Column()
  finite_projects: string;

  @OneToMany(() => Task, (task) => task.project)
  tasks: Task[]
  user: any; 
}


