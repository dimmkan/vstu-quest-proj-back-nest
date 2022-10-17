import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Res,
  StreamableFile,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DeleteResult } from 'typeorm';
import { CandidateEntity } from './candidate.entity';
import { CandidateService } from './candidate.service';
import { CreatedCandidateDto } from './dto/createdCandidate.dto';
import { FileBodyParamsDto } from './dto/fileBodyParams.dto';
import { UpdatedCandidateDto } from './dto/updatedCandidate.dto';
import { Response } from 'express';

@Controller('candidates')
export class CandidateController {
  constructor(private readonly candidateService: CandidateService) {}

  @Get()
  async getCandidates(): Promise<CandidateEntity[]> {
    return await this.candidateService.getAllCandidates();
  }

  @Post('add')
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

  @Get('downloadquest/:id')
  async downloadQuest(
    @Res({ passthrough: true }) res: Response,
    @Param('id') id: number,
  ): Promise<StreamableFile> {
    const file = await this.candidateService.getQuestById(id);
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="${file.questionnariesName}"`,
    );
    res.setHeader('Content-type', file.questionnariesType);
    res.setHeader('Content-Length', file.questionnariesSize);
    res.setHeader('Cache-Control', 'no-cache');
    return new StreamableFile(
      Buffer.from(file.questionnariesData.toString(), 'base64'),
    );
  }

  @Post('addquest/:id')
  @UseInterceptors(FileInterceptor('file'))
  async addQuest(
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: number,
    @Body() bodyParams: FileBodyParamsDto,
  ): Promise<void> {
    await this.candidateService.addQuest(file, id, bodyParams);
  }

  @Delete('deletequest/:id')
  @HttpCode(204)
  async deleteQuest(
    @Param('id') id: number,
    @Body() bodyParams: FileBodyParamsDto,
  ): Promise<void> {
    await this.candidateService.deleteQuest(id, bodyParams);
  }

  @Get('downloadworkbook/:id')
  async downloadWorkbook(
    @Res({ passthrough: true }) res: Response,
    @Param('id') id: number,
  ): Promise<StreamableFile> {
    const file = await this.candidateService.getWorkbookById(id);
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="${file.workbookName}"`,
    );
    res.setHeader('Content-type', file.workbookType);
    res.setHeader('Content-Length', file.workbookSize);
    res.setHeader('Cache-Control', 'no-cache');
    return new StreamableFile(
      Buffer.from(file.workbookData.toString(), 'base64'),
    );
  }

  @Post('addworkbook/:id')
  @UseInterceptors(FileInterceptor('file'))
  async addWorkbook(
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: number,
    @Body() bodyParams: FileBodyParamsDto,
  ): Promise<void> {
    await this.candidateService.addWorkbook(file, id, bodyParams);
  }

  @Delete('deleteworkbook/:id')
  @HttpCode(204)
  async deleteWorkbook(
    @Param('id') id: number,
    @Body() bodyParams: FileBodyParamsDto,
  ): Promise<void> {
    await this.candidateService.deleteWorkbook(id, bodyParams);
  }
}
