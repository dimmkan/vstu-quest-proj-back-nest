import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Md5 } from 'ts-md5';
import * as _ from 'ramda';
import { LoginUserDto } from 'src/user/dto/loginUser.dto';
import { UserEntity } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    loginedUser: LoginUserDto,
  ): Promise<Omit<UserEntity, 'password'> | null> {
    const checkUser = {
      ...loginedUser,
      password: Md5.hashStr(loginedUser.password),
    };

    const user = await this.usersService.findOne(checkUser);
    if (user) {
      return _.omit(['password'], user);
    }
    return null;
  }

  async login(user: Omit<UserEntity, 'password'>) {
    const payload = {
      userId: user.id,
      login: user.login,
      roles: user.roles,
      isAuth: true,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
