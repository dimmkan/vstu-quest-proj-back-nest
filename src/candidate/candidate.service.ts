import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CandidateEntity } from './candidate.entity';
import { CreatedCandidateDto } from './dto/createdCandidate.dto';
import * as _ from 'ramda';
import { LoggerService } from 'src/logger/logger.service';
import { UpdatedCandidateDto } from './dto/updatedCandidate.dto';

@Injectable()
export class CandidateService {
  constructor(
    @InjectRepository(CandidateEntity)
    private readonly candidateRepository: Repository<CandidateEntity>,
    private loggerService: LoggerService,
  ) {}

  async getAllCandidates(): Promise<CandidateEntity[]> {
    return await this.candidateRepository.find();
  }

  async createCandidate(createdCandidate: CreatedCandidateDto) {
    const newCandidate = new CandidateEntity();
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

  async updateCandidate(
    updatedCandidate: UpdatedCandidateDto,
    id: number,
  ): Promise<CandidateEntity> {
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

  async deleteCandidate(id: number): Promise<DeleteResult> {
    return await this.candidateRepository.delete(id);
  }
}
