import { DeleteResult } from 'typeorm';
import { CandidateEntity } from './candidate.entity';
import { CandidateService } from './candidate.service';
import { CreatedCandidateDto } from './dto/createdCandidate.dto';
import { UpdatedCandidateDto } from './dto/updatedCandidate.dto';
export declare class CandidateController {
    private readonly candidateService;
    constructor(candidateService: CandidateService);
    getCandidates(): Promise<CandidateEntity[]>;
    addCandidate(createdCandidate: CreatedCandidateDto): Promise<{
        success: boolean;
    }>;
    updateCandidate(updatedCandidate: UpdatedCandidateDto, id: number): Promise<CandidateEntity>;
    deleteCandidate(id: number): Promise<DeleteResult>;
    downloadQuest(): {};
    addQuest(): {};
    deleteQuest(): {};
    downloadWorkbook(): {};
    addWorkbook(): {};
    deleteWorkbook(): {};
}
