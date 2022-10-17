import { IsNotEmpty } from 'class-validator';

export class CreatedCandidateDto {
  @IsNotEmpty()
  readonly username: string;

  @IsNotEmpty()
  readonly fio: string;

  @IsNotEmpty()
  readonly birthday: string;

  @IsNotEmpty()
  readonly birthplace: string;

  @IsNotEmpty()
  readonly passport: string;

  @IsNotEmpty()
  readonly position: string;

  @IsNotEmpty()
  readonly department: string;
}
