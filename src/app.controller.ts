import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { Repository } from 'typeorm';
import { AgendamentoEntity } from '@database/entity/agendamento.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService ,
    @Inject("AGENDAMENTO_REPOSITORY")
    private readonly teste:Repository<AgendamentoEntity>) {}

  @Get()
  getHello(): string {
    console.log('start==========================');
    const obj=this.teste.create({id:2,data:new Date(),status:'success',descricao:'okok'});
    this.teste.save(obj).then(f=> console.log({banco:f})).catch(e=> console.log({banco:e}));
     this.teste.find().then(f=> console.log({banco:f})).catch(e=> console.log({banco:e}))
    return this.appService.getHello();
  }
}
