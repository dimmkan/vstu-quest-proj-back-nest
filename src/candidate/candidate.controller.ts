import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { CandidateEntity } from './candidate.entity';
import { CandidateService } from './candidate.service';
import { CreatedCandidateDto } from './dto/createdCandidate.dto';
import { UpdatedCandidateDto } from './dto/updatedCandidate.dto';

@Controller('candidates')
export class CandidateController {
  constructor(private readonly candidateService: CandidateService) {}

  @Get()
  async getCandidates(): Promise<CandidateEntity[]> {
    return await this.candidateService.getAllCandidates();
  }

  @Post()
  @HttpCode(201)
  async addCandidate(@Body() createdCandidate: CreatedCandidateDto) {
    return await this.candidateService.createCandidate(createdCandidate);
  }

  @Put('update/:id')
  async updateCandidate(
    @Body() updatedCandidate: UpdatedCandidateDto,
    @Param('id') id: number,
  ): Promise<CandidateEntity> {
    return await this.candidateService.updateCandidate(updatedCandidate, id);
  }

  @Delete('delete/:id')
  async deleteCandidate(@Param('id') id: number): Promise<DeleteResult> {
    return await this.candidateService.deleteCandidate(id);
  }

  @Get()
  downloadQuest() {
    return {};
  }

  @Post()
  addQuest() {
    return {};
  }

  @Delete()
  deleteQuest() {
    return {};
  }

  @Get()
  downloadWorkbook() {
    return {};
  }

  @Post()
  addWorkbook() {
    return {};
  }

  @Delete()
  deleteWorkbook() {
    return {};
  }
}
