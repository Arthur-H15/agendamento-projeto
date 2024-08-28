import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { Repository } from 'typeorm';
import { AgendamentoEntity } from '@database/entity/agendamento.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('AGENDAMENTO_REPOSITORY')
    private readonly  teste:Repository<AgendamentoEntity>
  )
     {teste.save({id:1,data:new Date(),descricao:'teste',status:'teste'})}

  @Get()
  async getHello(): Promise<any> {
    console.log('start==========================');
    const teste=await  this.teste.find();
    return teste;
  }
}
