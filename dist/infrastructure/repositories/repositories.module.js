"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoriesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../entities/user.entity");
const user_repository_1 = require("./user.repository");
const jwt_1 = require("@nestjs/jwt");
const constants_1 = require("../consts/constants");
const animal_entity_1 = require("../entities/animal.entity");
const animal_repository_1 = require("./animal.repository");
let RepositoriesModule = class RepositoriesModule {
};
exports.RepositoriesModule = RepositoriesModule;
exports.RepositoriesModule = RepositoriesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, animal_entity_1.Animal]),
            jwt_1.JwtModule.register({
                global: true,
                secret: constants_1.jwtConstants.secret,
                signOptions: { expiresIn: process.env.SESSION_TIMEOUT },
            }),
        ],
        providers: [user_repository_1.DatabaseUserRepository, animal_repository_1.DatabaseAnimalRepository],
        exports: [user_repository_1.DatabaseUserRepository, animal_repository_1.DatabaseAnimalRepository, typeorm_1.TypeOrmModule],
    })
], RepositoriesModule);
//# sourceMappingURL=repositories.module.js.map