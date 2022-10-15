import { Body, Controller, Post } from '@nestjs/common';
import { LoginUserDto } from './dto/loginUser.dto';
import { authUser } from './interfaces/auth.user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('auth')
  async authUser(@Body() loginUserDto: LoginUserDto): Promise<authUser> {
    // const result = await this.userService.authUser(loginUserDto);
    return {
      isAuth: true,
      userId: 1,
      userName: 'test',
      role: 'admin',
    };
  }
}
