"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidateModule = void 0;
const common_1 = require("@nestjs/common");
const candidate_service_1 = require("./candidate.service");
const candidate_controller_1 = require("./candidate.controller");
const logger_module_1 = require("../logger/logger.module");
const candidate_entity_1 = require("./candidate.entity");
const typeorm_1 = require("@nestjs/typeorm");
let CandidateModule = class CandidateModule {
};
CandidateModule = __decorate([
    (0, common_1.Module)({
        imports: [logger_module_1.LoggerModule, typeorm_1.TypeOrmModule.forFeature([candidate_entity_1.CandidateEntity])],
        providers: [candidate_service_1.CandidateService],
        controllers: [candidate_controller_1.CandidateController],
    })
], CandidateModule);
exports.CandidateModule = CandidateModule;
//# sourceMappingURL=candidate.module.js.map