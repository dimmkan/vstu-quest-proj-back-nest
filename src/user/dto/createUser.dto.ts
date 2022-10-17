import { IsIn, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  readonly login: string;

  @IsNotEmpty()
  readonly password: string;

  @IsNotEmpty()
  @IsIn(['admin', 'kadry', 'security'])
  readonly roles: string;
}
