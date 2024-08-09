import { Senha } from '/home/projetos/agendamentos/src/dominio/entidades/Senha';
test('deve Criar Senha', () => {
  const senha=Senha.create('senhaTeste');
  expect(senha).toBeDefined();
});
test('deve validar Senha', () => {
  const senhaCriptografada = Senha.create('senhaTeste').getSenha();
  expect(Senha.validarSenha('senhaTeste', senhaCriptografada)).toBeTruthy();
});
test('nao deve Criar Senha', () => {
  expect(()=>Senha.create('')).toThrow( new Error('invalid password'));
});