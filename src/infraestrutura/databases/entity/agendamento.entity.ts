import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { UsuarioEntity } from './usuario.entity';
import { ProcedimentoEntity } from './procedimento.entity';



@Entity()
export class AgendamentoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data: Date;

  @Column()
  status: string;

  @Column()
  descricao: string;

  @ManyToOne(() => UsuarioEntity)
  @JoinColumn({ name: 'idUsuario' })
  usuario: UsuarioEntity;

  @ManyToOne(() => ProcedimentoEntity)
  @JoinColumn({ name: 'idProcedimento' })
  procedimento: ProcedimentoEntity;
}
