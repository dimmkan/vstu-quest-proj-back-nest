import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLogDto } from './dto/createLog.dto';
import { LoggerEntity } from './logger.entity';

@Injectable()
export class LoggerService {
  constructor(
    @InjectRepository(LoggerEntity)
    private readonly loggerRepository: Repository<LoggerEntity>,
  ) {}

  async createLog(logObject: CreateLogDto) {
    const newLogObject = new LoggerEntity();
    Object.assign(newLogObject, logObject);
    await this.loggerRepository.save(logObject);
    return { success: true };
  }
}
