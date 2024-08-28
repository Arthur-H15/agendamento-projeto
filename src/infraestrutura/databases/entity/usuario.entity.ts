import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { AgendamentoEntity } from './agendamento.entity';



@Entity()
export class UsuarioEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;
  @Column()
  senha: string;
  @Column()
  excluido: string;


  @OneToMany(() => AgendamentoEntity, (agendamento) => agendamento.procedimento)
  agendamentos: AgendamentoEntity[];
}
