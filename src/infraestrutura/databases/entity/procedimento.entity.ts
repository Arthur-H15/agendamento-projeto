import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { AgendamentoEntity } from './agendamento.entity';
import { UsuarioEntity } from './usuario.entity';



@Entity()
export class ProcedimentoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data: Date;

  @Column()
  status: string;

  @Column()
  descricao: string;

  // @OneToMany(() => AgendamentoEntity, (agendamento) => agendamento.procedimento)
  // agendamentos: AgendamentoEntity[];

  // @ManyToOne(() => UsuarioEntity)
  // @JoinColumn({ name: 'idUsuario' })
  // usuario: UsuarioEntity;
}

