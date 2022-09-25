import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  async create(@Body() user: User): Promise<User> {
    return await this.userService.createUser(user);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: number,
    @Body() user: User,
  ): Promise<UpdateResult> {
    return await this.userService.updateUser(id, user);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<DeleteResult> {
    return await this.userService.deleteUser(id);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return await  this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id) {
     return await this.userService.findOne(id);
  }
}
