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
exports.CandidateService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const candidate_entity_1 = require("./candidate.entity");
const _ = require("ramda");
const logger_service_1 = require("../logger/logger.service");
let CandidateService = class CandidateService {
    constructor(candidateRepository, loggerService) {
        this.candidateRepository = candidateRepository;
        this.loggerService = loggerService;
    }
    async getAllCandidates() {
        return await this.candidateRepository.find();
    }
    async createCandidate(createdCandidate) {
        const newCandidate = new candidate_entity_1.CandidateEntity();
        Object.assign(newCandidate, _.omit(['username'], createdCandidate));
        await this.candidateRepository.save(newCandidate);
        const logObject = {
            username: createdCandidate.username,
            event: 'Add candidate',
            date: new Date().toLocaleString('ru-RU', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            }),
        };
        this.loggerService.createLog(logObject);
        return { success: true };
    }
    async updateCandidate(updatedCandidate, id) {
        const candidate = await this.candidateRepository.findOne({
            where: {
                id,
            },
        });
        Object.assign(candidate, _.omit(['username'], updatedCandidate));
        const logObject = {
            username: updatedCandidate.username,
            event: 'Update candidate',
            date: new Date().toLocaleString('ru-RU', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            }),
        };
        this.loggerService.createLog(logObject);
        return await this.candidateRepository.save(candidate);
    }
    async deleteCandidate(id) {
        return await this.candidateRepository.delete(id);
    }
};
CandidateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(candidate_entity_1.CandidateEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        logger_service_1.LoggerService])
], CandidateService);
exports.CandidateService = CandidateService;
//# sourceMappingURL=candidate.service.js.map