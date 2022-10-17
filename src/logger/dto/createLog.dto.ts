import { IsNotEmpty } from 'class-validator';

export class CreateLogDto {
  @IsNotEmpty()
  readonly username: string;

  @IsNotEmpty()
  readonly event: string;

  @IsNotEmpty()
  readonly date: string;
}
