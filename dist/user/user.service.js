"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ts_md5_1 = require("ts-md5");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async findOne(user) {
        return this.userRepository.findOne({
            where: {
                login: user.login,
                password: user.password,
            },
        });
    }
    async getAllUsers() {
        return await this.userRepository.find();
    }
    async createUser(createUser) {
        const newUser = new user_entity_1.UserEntity();
        Object.assign(newUser, createUser);
        newUser.password = ts_md5_1.Md5.hashStr(createUser.password);
        return this.userRepository.save(newUser);
    }
    async updateUser(updateUserDto, id) {
        const user = await this.userRepository.findOne({
            where: {
                id,
            },
        });
        Object.assign(user, updateUserDto);
        user.password = ts_md5_1.Md5.hashStr(updateUserDto.password);
        return await this.userRepository.save(user);
    }
    async deleteUser(id) {
        return await this.userRepository.delete(id);
    }
    async refreshPassword(refreshPassDto, id) {
        const user = await this.userRepository.findOne({
            where: {
                id,
            },
        });
        user.password = ts_md5_1.Md5.hashStr(refreshPassDto.newpass);
        return await this.userRepository.save(user);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map