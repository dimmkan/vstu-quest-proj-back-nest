import { DeleteResult, Repository } from 'typeorm';
import { CandidateEntity } from './candidate.entity';
import { CreatedCandidateDto } from './dto/createdCandidate.dto';
import { LoggerService } from 'src/logger/logger.service';
import { UpdatedCandidateDto } from './dto/updatedCandidate.dto';
export declare class CandidateService {
    private readonly candidateRepository;
    private loggerService;
    constructor(candidateRepository: Repository<CandidateEntity>, loggerService: LoggerService);
    getAllCandidates(): Promise<CandidateEntity[]>;
    createCandidate(createdCandidate: CreatedCandidateDto): Promise<{
        success: boolean;
    }>;
    updateCandidate(updatedCandidate: UpdatedCandidateDto, id: number): Promise<CandidateEntity>;
    deleteCandidate(id: number): Promise<DeleteResult>;
}
