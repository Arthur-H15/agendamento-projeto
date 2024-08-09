import * as bcrypt from "bcrypt";
export class Senha {

    constructor(private senha: string) {

    }
    static create(
        senha: string,
    ) {
        if (!this.SenhaValida(senha)) throw new Error("invalid password");
        const senhaHash = this.gerarHash(senha);
        return new Senha(senhaHash);
    }
    private static gerarHash(senha: string): string {

        return bcrypt.hashSync(senha, 10);
    }
    static validarSenha(senha: string, senhaCriptografada: string): boolean {
        return bcrypt.compareSync(senha, senhaCriptografada);
    }
    getSenha(): string {
        return this.senha;
    }
    private static removerEspacoes(senha: string): string {
        return senha.replace(/\s/g, '');
    }
    private static SenhaValida(senha: string): boolean {
        const senhaSemEspacos = this.removerEspacoes(senha);
        if (!senhaSemEspacos) return false;
        return true;

    }

}