import { Project } from '../project/project.entity';
import { Task } from 'src/task/task.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  login: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({select: false})
  password: string;

  @ManyToMany(() => Project)
  @JoinTable()
  en_cours: Project[]
}














