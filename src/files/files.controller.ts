import { Controller, Get, StreamableFile, Header } from '@nestjs/common';
import { createReadStream } from 'fs';

@Controller('files')
export class FilesController {
  @Get('getinstruction')
  @Header(
    'Content-Type',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  )
  @Header('Content-Disposition', 'attachment; filename="Instrukciya.docx"')
  getStaticFile(): StreamableFile {
    const file = createReadStream('./static/instr.docx');
    return new StreamableFile(file);
  }
}
