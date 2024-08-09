import { Agendamento } from "@entidades/Agendamento";
import { Procedimentos } from "@entidades/Procedimentos";
import { Usuario } from "@entidades/Usuario";

export interface IAgendamento {
    id: string;
  data: Date;
  procedimento: Procedimentos;
  usuario: Usuario;
  status: string;
  descricao?: string;
    create(
        data: Date,
        procedimento: Procedimentos,
        usuario: Usuario,
        descricao?: string,
    ): Agendamento;


    validarData(data: Date): void;

}