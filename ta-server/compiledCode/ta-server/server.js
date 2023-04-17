"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeServer = exports.server = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cadastrodealunos_1 = require("./cadastrodealunos");
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
exports.app = app;
const port = 3000;
var cadastro = new cadastrodealunos_1.CadastroDeAlunos();
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "http://localhost:4200");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
app.use(allowCrossDomain);
app.use(body_parser_1.default.json());
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.get('/alunos', function (req, res) {
    res.send(JSON.stringify(cadastro.getAlunos()));
});
app.post('/aluno', function (req, res) {
    var aluno = req.body; //verificar se é mesmo Aluno!
    aluno = cadastro.criar(aluno);
    if (aluno) {
        res.send({ "success": "O aluno foi cadastrado com sucesso" });
    }
    else {
        res.send({ "failure": "O aluno não pode ser cadastrado" });
    }
});
app.put('/aluno', function (req, res) {
    var aluno = req.body;
    aluno = cadastro.atualizar(aluno);
    if (aluno) {
        res.send({ "success": "O aluno foi atualizado com sucesso" });
    }
    else {
        res.send({ "failure": "O aluno não pode ser atualizado" });
    }
});
var server = app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
exports.server = server;
function closeServer() {
    server.close();
}
exports.closeServer = closeServer;
