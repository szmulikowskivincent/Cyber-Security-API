import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { AuthModule } from './auth/auth.module';
import { Project } from './project/project.entity';
import { ProjectModule } from './project/project.module';
import { Task } from './task/task.entity';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 49153,
      username: 'postgres',
      password: 'moi1971moi',
      database: 'postgres',
      entities: [User,Project,Task],
      synchronize: true,
    }),
    UsersModule,
    ProjectModule,
    TaskModule,
    AuthModule
  ],
  controllers: [AppController, CatsController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
