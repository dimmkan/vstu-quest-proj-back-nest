import { LoginUserDto } from './dto/loginUser.dto';
import { authUser } from './interfaces/auth.user.interface';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    authUser(loginUserDto: LoginUserDto): Promise<authUser>;
}
