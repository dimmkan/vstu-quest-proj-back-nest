import { Repository } from 'typeorm';
import { CreateLogDto } from './dto/createLog.dto';
import { LoggerEntity } from './logger.entity';
export declare class LoggerService {
    private readonly loggerRepository;
    constructor(loggerRepository: Repository<LoggerEntity>);
    createLog(logObject: CreateLogDto): Promise<{
        success: boolean;
    }>;
}
