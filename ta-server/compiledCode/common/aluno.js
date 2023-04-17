"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
class Aluno {
    constructor() {
        this.clean();
    }
    clean() {
        this.nome = "";
        this.cpf = "";
        this.email = "";
        this.metas = new Map();
    }
    clone() {
        var aluno = new Aluno();
        aluno.copyFrom(this);
        return aluno;
    }
    copyFrom(from) {
        this.nome = from.nome;
        this.cpf = from.cpf;
        this.email = from.email;
        this.copyMetasFrom(from.metas);
    }
    copyMetasFrom(from) {
        if (from instanceof Map) {
            this.metas = new Map();
            for (const [key, value] of from) {
                this.metas.set(key, value);
            }
        }
        else {
            this.metas = from;
        }
    }
}
exports.Aluno = Aluno;
