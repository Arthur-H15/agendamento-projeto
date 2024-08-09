import { Senha } from '/home/projetos/agendamentos/src/dominio/entidades/Senha';
import { Procedimentos } from '/home/projetos/agendamentos/src/dominio/entidades/Procedimentos';
import { Email } from '/home/projetos/agendamentos/src/dominio/entidades/Email';
import { Usuario } from '/home/projetos/agendamentos/src/dominio/entidades/Usuario';


test('deve Criar um novo procedimento', () => {
  const senha =Senha.create('teste')
  const email = Email.create('teste@teste.com')
  const usuario = Usuario.create('teste',email,senha)
  const procedimento = Procedimentos.create(3600, usuario);
  expect(procedimento).toBeDefined();
});
test('nao deve Criar um novo procedimento pois duracao e invalida ', () => {
  const senha =Senha.create('teste')
  const email = Email.create('teste@teste.com')
  const usuario = Usuario.create('teste',email,senha)
  expect(() => Procedimentos.create(null, usuario)).toThrow(
    new Error('A duração do procedimento nao pode ser invalida'),
  );
});

