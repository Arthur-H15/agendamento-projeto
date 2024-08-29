import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { AgendamentoEntity } from './agendamento.entity';




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

  @OneToMany(() => AgendamentoEntity, (agendamento) => agendamento.idProcedimento2)
  agendamentos: AgendamentoEntity[];

  // @ManyToOne(() => UsuarioEntity)
  // @JoinColumn({ name: 'idUsuario' })
  // usuario: UsuarioEntity;
}

