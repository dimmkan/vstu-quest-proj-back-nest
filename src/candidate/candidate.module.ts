import { Module } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { CandidateController } from './candidate.controller';
import { LoggerModule } from 'src/logger/logger.module';
import { CandidateEntity } from './candidate.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [LoggerModule, TypeOrmModule.forFeature([CandidateEntity])],
  providers: [CandidateService],
  controllers: [CandidateController],
})
export class CandidateModule {}
