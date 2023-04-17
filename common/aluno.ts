export class Aluno {
    nome!: string;
    cpf!: string;
    email!: string;
    metas: Map<string, string> | any;

    constructor() {
        this.clean();
    }

    clean(): void {
        this.nome = "";
        this.cpf = "";
        this.email = "";
        this.metas = new Map<string, string>();
    }

    clone(): Aluno {
        var aluno: Aluno = new Aluno();
        aluno.copyFrom(this);
        return aluno;
    }

    copyFrom(from: Aluno): void {
        this.nome = from.nome;
        this.cpf = from.cpf;
        this.email = from.email;
        this.copyMetasFrom(from.metas);
    }

    copyMetasFrom(from: Map<string, string> | any): void {
        if (from instanceof Map) {
            this.metas = new Map<string, string>();
            for (const [key, value] of from) {
                this.metas.set(key, value);
            }
        } else {
            this.metas = from;
        }
    }
}