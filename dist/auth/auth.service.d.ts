import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from 'src/user/dto/loginUser.dto';
import { UserEntity } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UserService, jwtService: JwtService);
    validateUser(loginedUser: LoginUserDto): Promise<Omit<UserEntity, 'password'> | null>;
    login(user: Omit<UserEntity, 'password'>): Promise<{
        access_token: string;
    }>;
}
