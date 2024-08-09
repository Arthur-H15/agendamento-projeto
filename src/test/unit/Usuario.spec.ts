import { Email } from '/home/projetos/agendamentos/src/dominio/entidades/Email';
import { Senha } from '/home/projetos/agendamentos/src/dominio/entidades/Senha';
import { Usuario } from '/home/projetos/agendamentos/src/dominio/entidades/Usuario';

test('deve Criar um novo usuario', () => {
  const senha=Senha.create('senhaTeste');
  const email = Email.create('email@email.com.br');
  const usuario = Usuario.create('teste',email,senha);
  expect(usuario).toBeDefined();
});
 test('nao deve criar usuario com nome invalido',()=>{
  const senha=Senha.create('senhaTeste');
  const email = Email.create('email@email.com.br');
  expect(()=>Usuario.create('',email,senha)).toThrow(
    new Error('invalid nome'),
  );
 
  
 })

