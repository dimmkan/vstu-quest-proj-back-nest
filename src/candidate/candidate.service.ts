import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CandidateEntity } from './candidate.entity';
import { CreatedCandidateDto } from './dto/createdCandidate.dto';
import * as _ from 'ramda';
import { LoggerService } from 'src/logger/logger.service';
import { UpdatedCandidateDto } from './dto/updatedCandidate.dto';
import { FileBodyParamsDto } from './dto/fileBodyParams.dto';

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
    Object.assign(candidate, _.omit(['username', 'id'], updatedCandidate));
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

  async getQuestById(id: number) {
    return await this.candidateRepository.findOne({
      where: { id },
      select: [
        'questionnariesData',
        'questionnariesName',
        'questionnariesType',
        'questionnariesSize',
      ],
    });
  }

  async addQuest(
    file: Express.Multer.File,
    id: number,
    bodyParams: FileBodyParamsDto,
  ) {
    const candidate = await this.candidateRepository.findOne({
      where: {
        id,
      },
    });
    const updatedFields = {
      questionnariesData: file.buffer.toString('base64'),
      questionnariesName: file.originalname,
      questionnariesType: file.mimetype,
      questionnariesSize: file.size,
    };
    Object.assign(candidate, updatedFields);
    const logObject = {
      username: bodyParams.username,
      event: 'Upload candidate questionnaries',
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
    await this.candidateRepository.save(candidate);
  }

  async deleteQuest(id: number, bodyParams: FileBodyParamsDto) {
    const candidate = await this.candidateRepository.findOne({
      where: {
        id,
      },
    });
    const updatedFields = {
      questionnariesData: null,
      questionnariesName: null,
      questionnariesType: null,
      questionnariesSize: null,
    };
    Object.assign(candidate, updatedFields);
    const logObject = {
      username: bodyParams.username,
      event: 'Delete candidate questionnaries',
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
    await this.candidateRepository.save(candidate);
  }

  async getWorkbookById(id: number) {
    return await this.candidateRepository.findOne({
      where: { id },
      select: ['workbookData', 'workbookName', 'workbookType', 'workbookSize'],
    });
  }

  async addWorkbook(
    file: Express.Multer.File,
    id: number,
    bodyParams: FileBodyParamsDto,
  ) {
    const candidate = await this.candidateRepository.findOne({
      where: {
        id,
      },
    });
    const updatedFields = {
      workbookData: file.buffer.toString('base64'),
      workbookName: file.originalname,
      workbookType: file.mimetype,
      workbookSize: file.size,
    };
    Object.assign(candidate, updatedFields);
    const logObject = {
      username: bodyParams.username,
      event: 'Upload candidate workbook',
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
    await this.candidateRepository.save(candidate);
  }

  async deleteWorkbook(id: number, bodyParams: FileBodyParamsDto) {
    const candidate = await this.candidateRepository.findOne({
      where: {
        id,
      },
    });
    const updatedFields = {
      workbookData: null,
      workbookName: null,
      workbookType: null,
      workbookSize: null,
    };
    Object.assign(candidate, updatedFields);
    const logObject = {
      username: bodyParams.username,
      event: 'Delete candidate questionnaries',
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
    await this.candidateRepository.save(candidate);
  }
}
