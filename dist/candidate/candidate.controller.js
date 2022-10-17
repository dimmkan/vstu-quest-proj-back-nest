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
const platform_express_1 = require("@nestjs/platform-express");
const candidate_service_1 = require("./candidate.service");
const createdCandidate_dto_1 = require("./dto/createdCandidate.dto");
const fileBodyParams_dto_1 = require("./dto/fileBodyParams.dto");
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
    async downloadQuest(res, id) {
        const file = await this.candidateService.getQuestById(id);
        res.setHeader('Content-Disposition', `attachment; filename="${file.questionnariesName}"`);
        res.setHeader('Content-type', file.questionnariesType);
        res.setHeader('Content-Length', file.questionnariesSize);
        res.setHeader('Cache-Control', 'no-cache');
        return new common_1.StreamableFile(Buffer.from(file.questionnariesData.toString(), 'base64'));
    }
    async addQuest(file, id, bodyParams) {
        await this.candidateService.addQuest(file, id, bodyParams);
    }
    async deleteQuest(id, bodyParams) {
        await this.candidateService.deleteQuest(id, bodyParams);
    }
    async downloadWorkbook(res, id) {
        const file = await this.candidateService.getWorkbookById(id);
        res.setHeader('Content-Disposition', `attachment; filename="${file.workbookName}"`);
        res.setHeader('Content-type', file.workbookType);
        res.setHeader('Content-Length', file.workbookSize);
        res.setHeader('Cache-Control', 'no-cache');
        return new common_1.StreamableFile(Buffer.from(file.workbookData.toString(), 'base64'));
    }
    async addWorkbook(file, id, bodyParams) {
        await this.candidateService.addWorkbook(file, id, bodyParams);
    }
    async deleteWorkbook(id, bodyParams) {
        await this.candidateService.deleteWorkbook(id, bodyParams);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CandidateController.prototype, "getCandidates", null);
__decorate([
    (0, common_1.Post)('add'),
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
    (0, common_1.Get)('downloadquest/:id'),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], CandidateController.prototype, "downloadQuest", null);
__decorate([
    (0, common_1.Post)('addquest/:id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, fileBodyParams_dto_1.FileBodyParamsDto]),
    __metadata("design:returntype", Promise)
], CandidateController.prototype, "addQuest", null);
__decorate([
    (0, common_1.Delete)('deletequest/:id'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, fileBodyParams_dto_1.FileBodyParamsDto]),
    __metadata("design:returntype", Promise)
], CandidateController.prototype, "deleteQuest", null);
__decorate([
    (0, common_1.Get)('downloadworkbook/:id'),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], CandidateController.prototype, "downloadWorkbook", null);
__decorate([
    (0, common_1.Post)('addworkbook/:id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, fileBodyParams_dto_1.FileBodyParamsDto]),
    __metadata("design:returntype", Promise)
], CandidateController.prototype, "addWorkbook", null);
__decorate([
    (0, common_1.Delete)('deleteworkbook/:id'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, fileBodyParams_dto_1.FileBodyParamsDto]),
    __metadata("design:returntype", Promise)
], CandidateController.prototype, "deleteWorkbook", null);
CandidateController = __decorate([
    (0, common_1.Controller)('candidates'),
    __metadata("design:paramtypes", [candidate_service_1.CandidateService])
], CandidateController);
exports.CandidateController = CandidateController;
//# sourceMappingURL=candidate.controller.js.map