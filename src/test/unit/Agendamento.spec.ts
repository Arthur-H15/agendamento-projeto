import { Usuario } from '/home/projetos/agendamentos/src/dominio/entidades/Usuario';
import { Agendamento } from '/home/projetos/agendamentos/src/dominio/entidades/Agendamento';
import { Procedimentos } from '/home/projetos/agendamentos/src/dominio/entidades/Procedimentos';
import { Senha } from '/home/projetos/agendamentos/src/dominio/entidades/Senha';
import { Email } from '/home/projetos/agendamentos/src/dominio/entidades/Email';
export class procedimentoTeste {
    private static  senha =Senha.create('teste');
    private static  email = Email.create('testeparceiro@teste.com');
    private static  usuario = Usuario.create('teste',this.email,this.senha);
    static value = Procedimentos.create(60,this.usuario);
}
export class UsuarioTeste{
    static value = Usuario.create('teste',Email.create('testecliente@teste.com'),Senha.create('teste'));
}
test('deve Criar um novo Agendamento', () => {
    const data=new Date("2024-07-18 22:00:00")
  const agendamento = Agendamento.create(data,procedimentoTeste.value,UsuarioTeste.value);
  expect(agendamento).toBeDefined();
});
// test('nao deve Criar um novo procedimento pois duracao e invalida ', () => {
//   expect(() => Procedimentos.create(null, '12345')).toThrow(
//     new Error('A duração do procedimento nao pode ser invalida'),
//   );
// });

