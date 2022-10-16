import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginUserDto } from './dto/loginUser.dto';
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
}
