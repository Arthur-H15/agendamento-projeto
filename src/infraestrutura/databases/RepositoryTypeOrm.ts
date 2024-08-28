
import { DataSource } from 'typeorm';
import { AgendamentoEntity } from './entity/agendamento.entity';


export const Providers = [
  {
    provide: 'AGENDAMENTO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(AgendamentoEntity),
    inject: ['DATA_SOURCE'],
  },
];