export class Aluno{
    nome!: string;
    cpf!: string;
    email!: string;
    metas!: Map<string , string>;

    constructor() {
        this.clean();
    }

    clean(): void {
        this.nome = "";
        this.cpf = "";
        this.email = "";
        this.metas = new Map<string, string>;
    }

    clone(): Aluno {
        var aluno: Aluno = new Aluno();
        aluno.nome = this.nome;
        aluno.cpf = this.cpf;
        aluno.email = this.email;
        aluno.metas = this.cloneMetas();
        return aluno;
    }

    cloneMetas(): Map<string ,string> {

        var metas1: Map<string ,string> = new Map<string, string>(this.metas);
        //for (let key in this.metas) {
        //    metas1[key] = this.metas[key];
        //}

        //metas1 = this.metas;
        return metas1;
    }
    
}