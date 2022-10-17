import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { RefreshPassDto } from './dto/refreshPass.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<UserEntity[]> {
    return await this.userService.getAllUsers();
  }

  @Post()
  @HttpCode(204)
  async createUser(@Body() createdUser: CreateUserDto) {
    await this.userService.createUser(createdUser);
  }

  @Put('update/:id')
  async updateUser(
    @Body() updateUserDto: UpdateUserDto,
    @Param('id') id: number,
  ): Promise<UserEntity> {
    return await this.userService.updateUser(updateUserDto, id);
  }

  @Delete('delete/:id')
  async deleteUser(@Param('id') id: number): Promise<DeleteResult> {
    return await this.userService.deleteUser(id);
  }

  @Post('refreshpass/:id')
  @HttpCode(204)
  async refreshPassword(
    @Body() refreshPassDto: RefreshPassDto,
    @Param('id') id: number,
  ) {
    return await this.userService.refreshPassword(refreshPassDto, id);
  }
}
