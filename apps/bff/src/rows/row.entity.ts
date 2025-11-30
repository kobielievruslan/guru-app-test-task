import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('rows')
export class RowEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  text!: string;

  @Column()
  number!: number;

  @Column()
  select!: string;

  @Column()
  status!: string;

  @Column()
  category!: string;

  @Column()
  priority!: number;

  @Column()
  flagged!: boolean;

  @Column()
  owner!: string;

  @Column()
  rating!: number;

  @Column()
  tag!: string;

  @Column({ type: 'text' })
  description!: string;

  @Column({ type: 'text' })
  note!: string;

  @Column()
  email!: string;

  @Column()
  phone!: string;

  @Column({ type: 'timestamp' })
  createdAt!: Date;

  @Column({ type: 'timestamp' })
  updatedAt!: Date;

  @Column()
  amount!: number;

  @Column()
  percentage!: number;

  @Column()
  isActive!: boolean;
}
