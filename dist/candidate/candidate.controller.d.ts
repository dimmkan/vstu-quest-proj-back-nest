import { CandidateService } from './candidate.service';
export declare class CandidateController {
    private readonly candidateService;
    constructor(candidateService: CandidateService);
    getCandidates(): void;
    addCandidate(): void;
    updateCandidate(): void;
    deleteCandidate(): void;
    downloadQuest(): void;
    addQuest(): void;
    deleteQuest(): void;
    downloadWorkbook(): void;
    addWorkbook(): void;
    deleteWorkbook(): void;
}
