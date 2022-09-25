import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { User } from './user.entity';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async createUser(user: User): Promise<User> {
    user.password=await hash(user.password,10);
    return await this.usersRepository.save(user);
  }

  async updateUser(id: number, user: User): Promise<UpdateResult> {
    return (this.usersRepository.update(id, user));
  }

  async deleteUser(id: number): Promise<DeleteResult> {
    return (this.usersRepository.delete(id));
  }

  async findAll(): Promise<User[]> {
    return await (this.usersRepository.find());
  }

  async findOne(login:string): Promise<User> {
    return await this.usersRepository.findOneBy({login:login});
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}

