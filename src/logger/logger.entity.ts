import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'log' })
export class LoggerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  event: string;

  @Column()
  date: string;
}
