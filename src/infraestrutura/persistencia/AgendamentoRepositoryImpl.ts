import { Injectable } from '@nestjs/common';
import { Agendamento } from '@entidades/Agendamento';
import { AgendamentoRepository } from '../repository/AgendamentoRepository';
import { Repository } from 'typeorm';
import { AgendamentoEntity } from '@database/entity/agendamento.entity';

@Injectable()
export class AgendamentoRepositoryImpl implements AgendamentoRepository {
  private repository: Repository<AgendamentoEntity>
  constructor(
    readonly persistence: Repository<AgendamentoEntity>
  ) {
  this.repository=persistence;
  }

  async salvar(agendamento: Agendamento): Promise<void> {

  }

  async buscarPorId(id: string): Promise<Agendamento | null> {
   
    return null;
  }

  async buscarTodos(): Promise<Agendamento[]> {
   
    return []; 
  }

  async cancelar(id: string): Promise<void> {

  }
}
