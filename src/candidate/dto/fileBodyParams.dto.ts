import { IsNotEmpty } from 'class-validator';

export class FileBodyParamsDto {
  @IsNotEmpty()
  readonly username: string;
}
