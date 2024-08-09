import { Email } from "./Email";
import { Senha } from "./Senha";
import * as crypto from 'crypto';
export class Usuario {
  constructor(
   readonly id: string,
    readonly nome: string,
    readonly email: Email,
    readonly senha: Senha,
    readonly ativo:boolean
  ) {

  }

    static create(
      nome: string,
      email: Email,
      senha: Senha,

    ): Usuario {
      const id = crypto.randomUUID();
      this.isValidString(nome)
      return new Usuario(id, nome, email, senha, true);
    }

 static isValidString(nome:string): void {
    if(!nome || nome.length==0 ) throw new Error('invalid nome');
  }
}
