import { DeleteResult } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { RefreshPassDto } from './dto/refreshPass.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAllUsers(): Promise<UserEntity[]>;
    createUser(createdUser: CreateUserDto): Promise<void>;
    updateUser(updateUserDto: UpdateUserDto, id: number): Promise<UserEntity>;
    deleteUser(id: number): Promise<DeleteResult>;
    refreshPassword(refreshPassDto: RefreshPassDto, id: number): Promise<UserEntity>;
}
