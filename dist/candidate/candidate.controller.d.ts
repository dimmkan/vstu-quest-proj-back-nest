/// <reference types="multer" />
import { StreamableFile } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { CandidateEntity } from './candidate.entity';
import { CandidateService } from './candidate.service';
import { CreatedCandidateDto } from './dto/createdCandidate.dto';
import { FileBodyParamsDto } from './dto/fileBodyParams.dto';
import { UpdatedCandidateDto } from './dto/updatedCandidate.dto';
import { Response } from 'express';
export declare class CandidateController {
    private readonly candidateService;
    constructor(candidateService: CandidateService);
    getCandidates(): Promise<CandidateEntity[]>;
    addCandidate(createdCandidate: CreatedCandidateDto): Promise<{
        success: boolean;
    }>;
    updateCandidate(updatedCandidate: UpdatedCandidateDto, id: number): Promise<CandidateEntity>;
    deleteCandidate(id: number): Promise<DeleteResult>;
    downloadQuest(res: Response, id: number): Promise<StreamableFile>;
    addQuest(file: Express.Multer.File, id: number, bodyParams: FileBodyParamsDto): Promise<void>;
    deleteQuest(id: number, bodyParams: FileBodyParamsDto): Promise<void>;
    downloadWorkbook(res: Response, id: number): Promise<StreamableFile>;
    addWorkbook(file: Express.Multer.File, id: number, bodyParams: FileBodyParamsDto): Promise<void>;
    deleteWorkbook(id: number, bodyParams: FileBodyParamsDto): Promise<void>;
}
