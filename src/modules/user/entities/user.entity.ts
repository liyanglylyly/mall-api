import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 50, comment: '用户名', nullable: false })
  user_name: string;
}
