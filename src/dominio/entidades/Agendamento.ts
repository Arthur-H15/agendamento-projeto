import { error } from 'console';
import * as crypto from 'crypto';
import { Procedimentos } from './Procedimentos';
import { Usuario } from './Usuario';
export class Agendamento {
  constructor(
    readonly id: string,
    readonly data: Date,
    readonly procedimento:Procedimentos,
    readonly usuario: Usuario,
    readonly status:status,
    readonly descricao?: string,
    
  ) {
    this.validarData(data);
  }

  static create(
     data: Date,
     procedimento:Procedimentos,
     usuario: Usuario,
     descricao?: string,
    // faixaHoraria: FaixaHoraria,
  ): Agendamento {
    const id = crypto.randomUUID(); // Função para gerar um UUID único
    return new Agendamento(
      id,
       data,
      procedimento,
      usuario,
      status.AGENDADO,
      descricao)
  }

  validar(): void {
    // Implementar lógica de validação de agendamento (datas, horários, etc.)
  }
  validarData(data:Date){
    if(new Date().getTime() < data.getTime()) throw new error("data Invalida");
  }
}

export enum status {
  AGENDADO='Agendado',
  EM_ANDAMENTO='Em Andamento',
  CANCELADO='Cancelado',
  CONCLUIDO='Concluido',
}
