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
exports.CandidateController = void 0;
const common_1 = require("@nestjs/common");
const candidate_service_1 = require("./candidate.service");
const createdCandidate_dto_1 = require("./dto/createdCandidate.dto");
const updatedCandidate_dto_1 = require("./dto/updatedCandidate.dto");
let CandidateController = class CandidateController {
    constructor(candidateService) {
        this.candidateService = candidateService;
    }
    async getCandidates() {
        return await this.candidateService.getAllCandidates();
    }
    async addCandidate(createdCandidate) {
        return await this.candidateService.createCandidate(createdCandidate);
    }
    async updateCandidate(updatedCandidate, id) {
        return await this.candidateService.updateCandidate(updatedCandidate, id);
    }
    async deleteCandidate(id) {
        return await this.candidateService.deleteCandidate(id);
    }
    downloadQuest() {
        return {};
    }
    addQuest() {
        return {};
    }
    deleteQuest() {
        return {};
    }
    downloadWorkbook() {
        return {};
    }
    addWorkbook() {
        return {};
    }
    deleteWorkbook() {
        return {};
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CandidateController.prototype, "getCandidates", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createdCandidate_dto_1.CreatedCandidateDto]),
    __metadata("design:returntype", Promise)
], CandidateController.prototype, "addCandidate", null);
__decorate([
    (0, common_1.Put)('update/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [updatedCandidate_dto_1.UpdatedCandidateDto, Number]),
    __metadata("design:returntype", Promise)
], CandidateController.prototype, "updateCandidate", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CandidateController.prototype, "deleteCandidate", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CandidateController.prototype, "downloadQuest", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CandidateController.prototype, "addQuest", null);
__decorate([
    (0, common_1.Delete)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CandidateController.prototype, "deleteQuest", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CandidateController.prototype, "downloadWorkbook", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CandidateController.prototype, "addWorkbook", null);
__decorate([
    (0, common_1.Delete)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CandidateController.prototype, "deleteWorkbook", null);
CandidateController = __decorate([
    (0, common_1.Controller)('candidates'),
    __metadata("design:paramtypes", [candidate_service_1.CandidateService])
], CandidateController);
exports.CandidateController = CandidateController;
//# sourceMappingURL=candidate.controller.js.map