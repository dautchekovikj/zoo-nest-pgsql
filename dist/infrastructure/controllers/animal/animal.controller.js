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
exports.AnimalController = void 0;
const common_1 = require("@nestjs/common");
const getAllAnimalsOlderThan_usesace_1 = require("../../../usecases/animal/getAllAnimalsOlderThan.usesace");
let AnimalController = class AnimalController {
    constructor(getAllAnimalsOlderThan) {
        this.getAllAnimalsOlderThan = getAllAnimalsOlderThan;
    }
    signIn(age) {
        return this.getAllAnimalsOlderThan.getAllAnimalsOlderThan(age);
    }
};
exports.AnimalController = AnimalController;
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Get)('/olderThan/:age'),
    __param(0, (0, common_1.Param)('age')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AnimalController.prototype, "signIn", null);
exports.AnimalController = AnimalController = __decorate([
    (0, common_1.Controller)('/animal'),
    __metadata("design:paramtypes", [getAllAnimalsOlderThan_usesace_1.GetAllAnimalsOlderThan])
], AnimalController);
//# sourceMappingURL=animal.controller.js.map