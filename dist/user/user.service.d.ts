import { DeleteResult, Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { LoginUserDto } from './dto/loginUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { UserEntity } from './user.entity';
export declare class UserService {
    private readonly userRepository;
    private readonly users;
    constructor(userRepository: Repository<UserEntity>);
    findOne(user: LoginUserDto): Promise<UserEntity | undefined>;
    getAllUsers(): Promise<UserEntity[]>;
    createUser(createUser: CreateUserDto): Promise<UserEntity>;
    updateUser(updateUserDto: UpdateUserDto, id: number): Promise<UserEntity>;
    deleteUser(id: number): Promise<DeleteResult>;
}
