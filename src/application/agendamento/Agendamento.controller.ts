import { Agendamento } from '@entidades/Agendamento';
import { Controller, Get, Req } from '@nestjs/common';
import { AgendamentoService } from './Agendamento.service';

@Controller('Agendamento')
export class AgendamentoController {
  constructor(readonly AgendamentoService: AgendamentoService) {}
  @Get()
  async getAgendamentos(
    @Req() request: Request & { user: any },
  ): Promise<Agendamento[]> {
    console.log('getAgendamentos');
    return [];
  }
}
