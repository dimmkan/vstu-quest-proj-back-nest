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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesController = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
let FilesController = class FilesController {
    getStaticFile() {
        const file = (0, fs_1.createReadStream)('./static/instr.docx');
        return new common_1.StreamableFile(file);
    }
};
__decorate([
    (0, common_1.Get)('getinstruction'),
    (0, common_1.Header)('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'),
    (0, common_1.Header)('Content-Disposition', 'attachment; filename="Instrukciya.docx"'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", common_1.StreamableFile)
], FilesController.prototype, "getStaticFile", null);
FilesController = __decorate([
    (0, common_1.Controller)('files')
], FilesController);
exports.FilesController = FilesController;
//# sourceMappingURL=files.controller.js.map