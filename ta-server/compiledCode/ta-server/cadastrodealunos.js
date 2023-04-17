"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CadastroDeAlunos = void 0;
const aluno_1 = require("../common/aluno");
class CadastroDeAlunos {
    constructor() {
        this.alunos = [];
    }
    criar(aluno) {
        var result = new aluno_1.Aluno();
        if (this.cpfNaoCadastrado(aluno.cpf)) {
            result = new aluno_1.Aluno();
            result.copyFrom(aluno);
            this.alunos.push(result);
        }
        return result;
    }
    cpfNaoCadastrado(cpf) {
        return !this.alunos.find(a => a.cpf == cpf);
    }
    atualizar(aluno) {
        var result = this.alunos.find(a => a.cpf == aluno.cpf);
        if (result)
            result.copyFrom(aluno);
        return result;
    }
    getAlunos() {
        return this.alunos;
    }
}
exports.CadastroDeAlunos = CadastroDeAlunos;
