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
exports.DatabaseUserRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_model_1 = require("../../domain/model/user.model");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../entities/user.entity");
const jwt_1 = require("@nestjs/jwt");
let DatabaseUserRepository = class DatabaseUserRepository {
    constructor(userEntityRepository, jwtService) {
        this.userEntityRepository = userEntityRepository;
        this.jwtService = jwtService;
    }
    async findUserByUsernameAndPassword(username, password) {
        const adminUserEntity = await this.userEntityRepository.findOne({
            where: {
                username: username,
                password: password,
            },
        });
        if (!adminUserEntity) {
            return null;
        }
        return this.toUser(adminUserEntity);
    }
    async login(username, password) {
        const user = await this.findUserByUsernameAndPassword(username, password);
        if (user == null) {
            throw new common_1.UnauthorizedException();
        }
        const payload = { sub: user.id, username: user.username };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
    toUser(adminUserEntity) {
        const adminUser = new user_model_1.UserModel();
        adminUser.id = adminUserEntity.id;
        adminUser.username = adminUserEntity.username;
        adminUser.password = adminUserEntity.password;
        adminUser.role = adminUserEntity.role;
        return adminUser;
    }
};
exports.DatabaseUserRepository = DatabaseUserRepository;
exports.DatabaseUserRepository = DatabaseUserRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], DatabaseUserRepository);
//# sourceMappingURL=user.repository.js.map