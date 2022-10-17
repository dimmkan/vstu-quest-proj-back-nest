import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Md5 } from 'ts-md5';
import { DeleteResult, Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { LoginUserDto } from './dto/loginUser.dto';
import { RefreshPassDto } from './dto/refreshPass.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  private readonly users: UserEntity[];

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findOne(user: LoginUserDto): Promise<UserEntity | undefined> {
    return this.userRepository.findOne({
      where: {
        login: user.login,
        password: user.password,
      },
    });
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async createUser(createUser: CreateUserDto): Promise<UserEntity> {
    const newUser = new UserEntity();
    Object.assign(newUser, createUser);
    newUser.password = Md5.hashStr(createUser.password);
    return this.userRepository.save(newUser);
  }

  async updateUser(
    updateUserDto: UpdateUserDto,
    id: number,
  ): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: {
        id,
      },
    });
    Object.assign(user, updateUserDto);
    user.password = Md5.hashStr(updateUserDto.password);
    return await this.userRepository.save(user);
  }

  async deleteUser(id: number): Promise<DeleteResult> {
    return await this.userRepository.delete(id);
  }

  async refreshPassword(refreshPassDto: RefreshPassDto, id: number) {
    const user = await this.userRepository.findOne({
      where: {
        id,
      },
    });
    user.password = Md5.hashStr(refreshPassDto.newpass);
    return await this.userRepository.save(user);
  }
}
