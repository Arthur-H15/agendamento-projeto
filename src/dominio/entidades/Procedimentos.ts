import * as crypto from 'crypto';
import { Usuario } from './Usuario';
export class Procedimentos {
  constructor(
    readonly procedimentoId: string,
    private duracaoInSeconds: number,
    readonly Usuario: Usuario,
  ) {
    this.inserirDuracaoEmSegundos(duracaoInSeconds);
  }
  static create(duracaoInSeconds: number, Usuario: Usuario) {
    const procedimentoId = crypto.randomUUID();
    return new Procedimentos(procedimentoId, duracaoInSeconds, Usuario);
  }
  private validarDuracaoInSeconds(duracaoInSeconds: number) {
    if (!+duracaoInSeconds || duracaoInSeconds <= 0)
      throw new Error('A duração do procedimento nao pode ser invalida');
  }
  getDuracaoEmSegundos() {
    return this.duracaoInSeconds;
  }
  private setDuracaoEmSegundos(duracaoInSeconds: number) {
    this.duracaoInSeconds = duracaoInSeconds;
  }
  inserirDuracaoEmSegundos(duracaoInSeconds: number) {
    this.validarDuracaoInSeconds(duracaoInSeconds);
    this.setDuracaoEmSegundos(duracaoInSeconds);
  }
}
