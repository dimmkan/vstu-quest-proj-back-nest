import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CandidateService } from './candidate.service';

@Controller('candidates')
export class CandidateController {
  constructor(private readonly candidateService: CandidateService) {}

  @Get()
  getCandidates() {}

  @Post()
  addCandidate() {}

  @Put()
  updateCandidate() {}

  @Delete()
  deleteCandidate() {}

  @Get()
  downloadQuest() {}

  @Post()
  addQuest() {}

  @Delete()
  deleteQuest() {}

  @Get()
  downloadWorkbook() {}

  @Post()
  addWorkbook() {}

  @Delete()
  deleteWorkbook() {}
}
