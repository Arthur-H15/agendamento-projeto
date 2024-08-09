import { Module } from '@nestjs/common';
import { AgendamentoService } from './Agendamento.service';
import { AgendamentoController } from './Agendamento.controller';

@Module({
  imports: [],
  controllers: [AgendamentoController],
  providers: [AgendamentoService],
})
export class AgendamentoModule {}
