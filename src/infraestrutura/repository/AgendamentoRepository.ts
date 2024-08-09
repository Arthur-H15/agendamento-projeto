import { Agendamento } from '@entidades/Agendamento';

export interface AgendamentoRepository {
 
  salvar(agendamento: Agendamento): Promise<void>;

  
  buscarPorId(id: string): Promise<Agendamento | null>;

  
  buscarTodos(): Promise<Agendamento[]>;

  
  cancelar(id: string): Promise<void>;
}
