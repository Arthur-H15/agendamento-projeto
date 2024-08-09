import { Injectable } from '@nestjs/common';
import { Agendamento } from '@entidades/Agendamento';
import { AgendamentoRepository } from '../repository/AgendamentoRepository';

@Injectable()
export class AgendamentoRepositoryImpl implements AgendamentoRepository {
  constructor(private readonly persistence: any) {}

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
