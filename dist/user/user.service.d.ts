import { Repository } from 'typeorm';
import { LoginUserDto } from './dto/loginUser.dto';
import { UserEntity } from './user.entity';
export declare class UserService {
    private readonly userRepository;
    private readonly users;
    constructor(userRepository: Repository<UserEntity>);
    findOne(user: LoginUserDto): Promise<UserEntity | undefined>;
}
