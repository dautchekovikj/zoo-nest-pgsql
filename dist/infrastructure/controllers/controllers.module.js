"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllersModule = void 0;
const auth_controller_1 = require("./auth/auth.controller");
const common_1 = require("@nestjs/common");
const usecases_module_1 = require("../../usecases/usecases.module");
const animal_controller_1 = require("./animal/animal.controller");
let ControllersModule = class ControllersModule {
};
exports.ControllersModule = ControllersModule;
exports.ControllersModule = ControllersModule = __decorate([
    (0, common_1.Module)({
        imports: [usecases_module_1.UseCasesModule],
        providers: [
            auth_controller_1.AuthController,
            animal_controller_1.AnimalController,
        ],
        controllers: [auth_controller_1.AuthController, animal_controller_1.AnimalController],
        exports: [auth_controller_1.AuthController, animal_controller_1.AnimalController],
    })
], ControllersModule);
//# sourceMappingURL=controllers.module.js.map