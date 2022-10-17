import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'candidates' })
export class CandidateEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fio: string;

  @Column({ type: 'date', nullable: true })
  birthday: string;

  @Column({ nullable: true })
  birthplace: string;

  @Column({ nullable: true })
  passport: string;

  @Column({ nullable: true })
  position: string;

  @Column({ nullable: true })
  department: string;

  @Column({ type: 'date', nullable: true })
  checkStartDate: string;

  @Column({ type: 'date', nullable: true })
  checkEndDate: string;

  @Column({ nullable: true })
  checkResult: string;

  @Column({ nullable: true })
  checkStatus: number;

  @Column({ nullable: true })
  checkComment: string;

  @Column({ nullable: true, select: false })
  questionnariesData: string;

  @Column({ nullable: true })
  questionnariesName: string;

  @Column({ nullable: true, select: false })
  questionnariesType: string;

  @Column({ nullable: true, select: false })
  questionnariesSize: number;

  @Column({ nullable: true, select: false })
  workbookData: string;

  @Column({ nullable: true })
  workbookName: string;

  @Column({ nullable: true, select: false })
  workbookType: string;

  @Column({ nullable: true, select: false })
  workbookSize: number;

  @Column({ nullable: true })
  endResult: string;
}
